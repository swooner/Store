
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const getCart = ({ user_id }) => {
    return database.query( 
        `
            SELECT ORDER_TOTAL.total, cus_order.O_ID
            FROM ORDER_TOTAL
            JOIN cus_order
                ON cus_order.O_Cus_ID = ORDER_TOTAL.Cus_ID
            WHERE ORDER_TOTAL.Cus_ID = ${ user_id }
                AND cus_order.O_status = 'ACTIVE'
        `
    , {
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'getCart rows:', rows[ 0 ] );
        return rows[ 0 ]
    })
    .catch( err => console.error( err.stack ) );
};

export const getCartItems = ({ order_id }) => {
    return database.query( 
        `
            SELECT *
            FROM ORDER_SUMMARY
            WHERE OI_O_ID = ${ order_id }
        `
    , {
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'getCartItem rows:', rows );
        return rows
    })
    .catch( err => console.error( err.stack ) );
};