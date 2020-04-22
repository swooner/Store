
import database from '../../../../mysql/connection';
const Sequelize = require( 'sequelize' );

export const deleteEmployee = ({
    user_id,
}) => {
    return database.query(
        `
            DELETE FROM employee
            WHERE E_Cus_ID = '${ user_id }',
        `, {
        type: Sequelize.QueryTypes.DELETE 
    })
    .then( rows => {
        console.log( 'Delete employee rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};