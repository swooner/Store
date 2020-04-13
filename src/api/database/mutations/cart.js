
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');
import { DateTimeNow } from '../../helpers';


export const addCartItem = ({ product_id, quantity, size_id, user_id }) => {
    return database.transaction( t => {
        return database.query(
            `
                INSERT INTO cus_order( O_Cus_ID, O_status )
                VALUES(
                    ${ user_id },
                    'ACTIVE'
                )
                ON DUPLICATE KEY UPDATE O_ID=O_ID
            `, {
                transaction: t,
                raw: true,
                type: Sequelize.QueryTypes.INSERT 
            }
        )
        .then( order => {
            return database.query(
                `
                    SELECT O_ID
                    FROM cus_order
                    WHERE O_Cus_ID=${ user_id }
                `, {
                    transaction: t,
                    type: Sequelize.QueryTypes.SELECT 
                }
            )
            .then( order => {
                console.log( 'order:', order );
                const order_id = order[ 0 ].O_ID;
                return database.query(
                    `
                        INSERT INTO order_item( OI_O_ID, OI_P_ID, OI_PS_ID, OI_quantity, OI_addedAt )
                        VALUES(
                            ${ order_id },
                            ${ product_id },
                            ${ size_id },
                            ${ quantity },
                            '${ DateTimeNow( ) }'
                        )
                    `, {
                        transaction: t,
                        raw: true,
                        type: Sequelize.QueryTypes.INSERT 
                    }
                )
                .then( rows => {
                    console.log( 'Added order_item:', rows );
                    return rows
                })
                .catch( err => {
                    console.log( 'Error inserting order item:', err.stack );
                    throw new Error( );
                });
            })
            .catch( err => {
                console.log( 'Error selecting order:', err.stack );
                throw new Error( );
            })
        })
        .catch( err => {
            console.log( 'Error inserting order:', err.stack );
            throw new Error( );
        });
    })
    .then( rows => {
        console.log( 'addCartItem transaction:', rows  );
        return rows
    })
    .catch( err => {
        console.log( 'Error inserting transaction:', err.stack );
        throw new Error( );
    });
};

export const deleteCartItem = ({ order_id, product_id }) => {
    return database.query(
        `
            DELETE FROM order_item
            WHERE OI_O_ID=${ order_id }
                AND OI_P_ID=${ product_id }
        
        `
    , {
        type: Sequelize.QueryTypes.DELETE
    })
    .then( rows => {
        console.log( 'deleteCartItem rows:', rows );
        return rows
    })
    .catch( err => console.error( err.stack ) )
};

export const updateCartItem = ({ order_id, product_id, size_id, quantity }) => {
    return database.query(
        `
            UPDATE order_item
            SET 
                OI_PS_ID = ${ size_id },
                OI_quantity = ${ quantity }
            WHERE 
                OI_O_ID=${ order_id }
                AND OI_P_ID=${ product_id };
        
        `
    , {
        type: Sequelize.QueryTypes.UPDATE
    })
    .then( rows => {
        console.log( 'updateCartItem rows:', rows );
        return rows
    })
    .catch( err => console.error( err.stack ) )
};


export const submitOrder = ({ order_id, saleMethod, paymentMethod, addressType, street, city, state, zip_code, products }) => {
    // return database.transaction( t => {
        return database.query(
            `
                UPDATE cus_order
                SET
                    O_status = 'COMPLETED',
                    O_saleMethod = '${ saleMethod }',
                    O_payMethod = '${ paymentMethod }',
                    O_addressType = '${ addressType }',
                    O_street = '${ street }',
                    O_city = '${ city }',
                    O_state = '${ state }',
                    O_zipCode = '${ zip_code }'
                WHERE
                    O_ID = ${ order_id }
            `
        , {
            // transaction: t,
            raw: true,
            type: Sequelize.QueryTypes.UPDATE
        })
        .then( rows => {
            console.log( 'submitOrder rows:', rows );
            // return rows
            let i = 0;
            while ( i < products.length ) {
                console.log( 'product:', products[ i ] );
                const { product_id, quantity } = products[ i ];
                database.query(
                    `
                    UPDATE product
                    SET
                        P_QUANTITY = P_QUANTITY - ${ quantity }
                    WHERE
                        P_ID = ${ product_id }
                    `, {
                        // transaction: t,
                        raw: true,
                        type: Sequelize.QueryTypes.UPDATE
                    }
                )
                .then( rows => {
                    console.log( 'Updated product quantity:', rows );
                    // return rows
                })
                .catch( err => {
                    console.log( 'Error updating product quantity:', err.stack );
                    // throw new Error( );
                });

                i++;
            }
        })
        .catch( err => console.error( err.stack ) )
    // })
    // .then( rows => {
    //     console.log( 'transaction rows:', rows );
    // })
    // .catch ( err => {
    //     console.error( err.stack )
    //     throw new Error( );
    // })
};

export const savePayment = ({ user_id, card_name, card_number, expiration_month, expiration_year }) => {
    return database.query(
        `
            INSERT INTO payment( Pay_Cus_ID, Pay_cardName, Pay_cardNum, Pay_cardExpMonth, Pay_cardExpYear )
            VALUES(
                ${ user_id }, 
                '${ card_name }', 
                '${ card_number }', 
                '${ expiration_month }', 
                '${ expiration_year }',
            )
        `
    , {
        type: Sequelize.QueryTypes.INSERT
    })
    .then( rows => {
        console.log( 'savePayment rows:', rows );
        return rows
    })
    .catch( err => console.error( err.stack ) )
};

export const validatePayment = ({ card_name, card_number, expiration_month, expiration_year, security_code }) => {
    if ( card_name.length < 4 ) {
        throw new Error( 'Credit card name is not valid' );
    }
    else if ( card_number.length != 16 ) {
        throw new Error( 'Credit card number is not valid' );
    }
    else if ( parseInt( expiration_month ) < 1 || parseInt( expiration_month ) > 12 ) {
        throw new Error( 'Expiration month is not valid' );
    }
    else if ( parseInt( expiration_year ) < 20) {
        throw new Error( 'Expiration year is not valid' );
    }
    else if ( parseInt( security_code ) < 1 || parseInt( security_code ) > 3 ) {
        throw new Error( 'Security code is not valid' );
    }
    else {
       
        return { success: true }
    }
};