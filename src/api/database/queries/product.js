
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export class Product {
    constructor( name, price ) {
        this.name = name;
        this.price = price;
    }
};

// Mock product database table
const productsById = new Map();



export const addProduct = ( name, price ) => {
    const product = new Product( name, price );
    // database.query( 'INSERT INTO product ( name, price ) VALUES (?, ?)', {
    //     replacements: [ product.name, product.price ],
    //     type: Sequelize.QueryTypes.INSERT 
    // })
    // .then( rows => {
    //     console.log( 'addProduct rows:', rows );
    //     return rows;
    // })
    // .catch( err => console.error( err.stack ) );
}; 


// Seed initial data
addProduct( 'Nail polish', 7.50 );
addProduct( 'Hair extensions', 12.00 );

function getProduct( id ) {
    return productsById.get( id );
}

export const getProductOrThrow = ({ id }) => {
    const sql = `SELECT * FROM product WHERE id = ? `;
    const replacements = [ id ];
    return database.query( sql, {
        replacements,
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        console.log( 'getProductOrThrow rows:', rows[ 0 ] );
        return rows[ 0 ]
    })
};