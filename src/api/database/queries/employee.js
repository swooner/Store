
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const getAllEmployees = ({ query, first }) => {
    return database.query(
        `
            SELECT Cus_ID, Cus_FName, Cus_LName, E_role
            FROM customer c
            LEFT JOIN employee e
            ON e.E_Cus_ID = c.Cus_ID
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'Get employees rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};

export const getEmployee = ({ id }) => {
    return database.query(
        `
            SELECT E_role
            FROM employee
            WHERE E_Cus_ID = '${ id }'
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'Get employee rows:', rows[ 0 ] );
        return rows[ 0 ];
    })
    .catch( err => console.error( err.stack ) );
};
