
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

const getCategory = ({ id }) => {
    const sql = `SELECT * from category`;
    const replacements = id ? [ id ] : [];
    database.query( sql, {
        replacements,
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getCategory rows:', rows[ 0 ] );
        return rows[ 0 ]
    });
};

export { getCategory }