
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');


export const getUser = ({ id }) => {
    return database.query(
        `
            SELECT *, E_role
            FROM customer c
            LEFT JOIN employee e
                ON e.E_Cus_ID = ${ id }
            WHERE Cus_ID = ${ id }
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT 
    })
    .then( rows => {
        // console.log( 'GET user rows:', rows ); 
        return rows[ 0 ];
    })
    .catch( err => console.error( err.stack ) );
};


export const searchUsers = ({ query, first }) => {
    return database.query(
        `
            SELECT DISTINCT Cus_ID, Cus_Fname, Cus_Lname, Cus_accName
            FROM customer
            WHERE Cus_FName LIKE '%${ query }%'
                OR Cus_LName LIKE '%${ query }%'
                OR Cus_accName LIKE '%${ query }%'
        `, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'Search users rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};
