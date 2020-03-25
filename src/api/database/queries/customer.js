
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');


export const getCustomer = ({ id }) => {
    return database.query(
        `
            SELECT Cus_ID, Cus_accName
            FROM customer
            WHERE Cus_ID = '${ id }'
        `, {
        type: Sequelize.QueryTypes.INSERT 
    })
    .then( rows => {
        console.log( 'GET customer rows:', rows[ 0 ] );
        return rows[ 0 ];
    })
    .catch( err => console.error( err.stack ) );
}