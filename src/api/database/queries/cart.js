
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const getCart = ({ user_id }) => {
    return database.query( 
        `
            SELECT * 
            FROM cus_order
            WHERE O_Cus_ID = '${ user_id }'
        `
    , {
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'getCart rows:', rows[ 0 ] );
        return rows[ 0 ]
    });
};

export const getCartItems = ({ order_id }) => {
    return database.query( 
        `
            SELECT * 
            FROM order_items
            WHERE OI_O_ID = ${ order_id }
        `
    , {
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'getCartItem rows:', rows );
        return rows
    });
};