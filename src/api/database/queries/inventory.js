
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const getAllInventoryOrders = ({  }) => {
    return database.query(
        `
            SELECT *
            FROM inventory_order
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'Get inventory orders rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};
