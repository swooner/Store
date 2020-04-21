
import database from '../../../../mysql/connection';
const Sequelize = require( 'sequelize' );
import { DateTimeNow } from '../../helpers';

export const fillInventoryOrder = ({
    inventory_order_id,
    user_id,
    quantity
}) => {
    console.log( 'inventory_order_id:', inventory_order_id );
    console.log( 'user_id:', user_id );
    console.log( 'quantity:', quantity );
    return database.query(
        `
            UPDATE
                inventory_order
            SET
                IO_status = 'FILLED',
                IO_quantity = ${ quantity },
                IO_filledBy = ${ user_id },
                IO_filledAt = '${ DateTimeNow( ) }'
            WHERE 
                IO_ID = ${ inventory_order_id }
        `, {
        type: Sequelize.QueryTypes.UPDATE,
        raw: true,
    })
    .then( rows => {
        console.log( 'Updated inventory order status:', rows );
        return rows
    })
    .catch( err => {
        console.error( 'There was an error updating inventory order status:', err.stack )
    });
};
// export const fillInventoryOrder = ({
//     inventory_order_id,
//     user_id,
//     product_id,
//     quantity
// }) => {
//     return database.transaction( t => {
//         return database.query( t =>
//             `
//                 UPDATE
//                     inventory_order
//                 SET
//                     IO_status = 'FILLED'
//                     IO_filledBy = ${ user_id }
//                     IO_filledAt = ${ DateTimeNow( ) }
//                 WHERE 
//                     IO_ID = '${ inventory_order_id }',
//             `, {
//             type: Sequelize.QueryTypes.UPDATE,
//             raw: true,
//             transaction: t
//         })
//         .then( rows => {
//             console.log( 'Updated inventory order status:', rows );
//             return database.query( t =>
//                 `
//                     UPDATE
//                         product
//                     SET
//                         P_quantity = P_quantity + ${ quantity }
        
//                     WHERE P_ID = '${ product_id }',
//                 `, {
//                 type: Sequelize.QueryTypes.UPDATE,
//                 raw: true,
//                 transaction: t
//             })
//             .then( rows => {
//                 console.log( 'Successfully updated the product quantity:', rows );
//                 return rows;
//             })
//             .catch( err => {
//                 console.error( 'There was an error updating the product quantity:', err.stack )
//                 throw new Error( )
//             });
//         })
//         .catch( err => {
//             console.error( 'There was an error updating inventory order status:', err.stack )
//             throw new Error( );
//         });
//     })
//     .then( rows => {
//         console.log( 'Transaction complete:', rows );
//         return rows;
//     })
//     .catch( err => {
//         console.error( 'There was an error in the transaction:', err.stack )
//         throw new Error( )
//     });
// };






export const deleteInventoryOrder = ({
    inventory_order_id,
}) => {
    return database.query(
        `
            DELETE FROM inventory_order
            WHERE IO_ID = '${ inventory_order_id }',
        `, {
        type: Sequelize.QueryTypes.DELETE 
    })
    .then( rows => {
        console.log( 'Delete inventory rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};