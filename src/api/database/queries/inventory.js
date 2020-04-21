
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

// export const getAllInventoryOrders = ({ status }) => {
//     return database.query(
//         `
//             SELECT *
//             FROM inventory_order
//             WHERE
//                 IO_status = ${ status }
//         `, {
//         raw: true,
//         type: Sequelize.QueryTypes.SELECT
//     })
//     .then( rows => {
//         console.log( 'Get inventory orders rows:', rows );
//         return rows;
//     })
//     .catch( err => console.error( err.stack ) );
// };

export const getPendingInventoryOrders = ({ }) => {
    return database.query(
        `
            SELECT *
            FROM inventory_order
            WHERE
                IO_status = 'PENDING'
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'Get pending inventory orders rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};

export const getFilledInventoryOrders = ({ }) => {
    return database.query(
        `
            SELECT *
            FROM inventory_order
            WHERE
                IO_status = 'FILLED'
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'Get filled inventory orders rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};

