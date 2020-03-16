
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export class Product {
    constructor( name, price ) {
        this.brand = name;
        this.price = price;
    }
};

// Mock product database table
const productsById = new Map();

export const addSampleProduct = ( ) => {
    database.query( 'INSERT INTO product ( P_brand, P_name, P_description, P_quantity, P_price, P_threshold ) VALUES (?, ?, ?, ?, ?, ?)', {
        replacements: [ 'Hersheys', 'Kisses', 'A tasty chocolate treat', '100', '0.99', '5000' ],
        type: Sequelize.QueryTypes.INSERT 
    })
    .then( rows => {
        console.log( 'addProduct rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
}; 


// Seed initial data
// addSampleProduct( );

export const getProduct = ({ id }) => {
    const sql = `SELECT * FROM product WHERE id = ? `;
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