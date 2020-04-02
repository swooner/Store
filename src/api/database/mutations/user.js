
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const updateRole = ({
    user_id,
    role,
}) => {
    return database.query(
        `
            INSERT INTO employee(
                E_Cus_ID,
                E_role
            )
            VALUES(
                '${ user_id }',
                '${ role }'
            )
            ON DUPLICATE KEY UPDATE E_role='${ role }'
        `, {
        type: Sequelize.QueryTypes.INSERT 
    })
    .then( rows => {
        console.log( 'Update role rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
}