
import database from '../../../../mysql/connection';
const Sequelize = require( 'sequelize' );

export const deleteInventoryOrder = ({
    inventory_order_id,
}) => {
    return database.query(
        `
            DELETE FROM inventory
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