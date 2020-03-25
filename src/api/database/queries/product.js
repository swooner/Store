
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');


// get a single product
export const getProduct = ({ id }) => {
    // console.log( 'id:', id );
    const sql = `SELECT * FROM product WHERE P_ID = ? `;
    const replacements = [ id ];
    return database.query( sql, {
        replacements,
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getProduct rows:', rows[ 0 ] );
        return rows[ 0 ]
    })
};

// get a list of products
export const getProductList = ({ }) => {
    const sql = `SELECT * FROM product`;
    return database.query( sql, {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getProducts rows:', rows );
        return rows
    })
};