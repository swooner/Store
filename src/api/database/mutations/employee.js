
import database from '../../../../mysql/connection';
const Sequelize = require( 'sequelize' );

export const deleteEmployee = ({
    E_Cus_ID,
}) => {
    return database.query(
        `
            DELETE FROM employee
            WHERE E_Cus_ID = '${ E_Cus_ID }',
        `, {
        type: Sequelize.QueryTypes.DELETE 
    })
    .then( rows => {
        console.log( 'Delete employee rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};