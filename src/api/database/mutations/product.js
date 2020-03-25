
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const addProduct = ( ) => {
    database.query( 
        `
            INSERT INTO product ( P_brand, P_name, P_description, P_quantity, P_price, P_threshold ) 
            VALUES ( 'Hersheys', 'Kisses', 'A tasty chocolate treat', 100, 0.99, 5000 )
        `, {
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

export const deleteProduct = ( ) => {
    database.query( "DELETE FROM product WHERE P_name='Kisses'" )
        .then( rows => {
            console.log( 'Deleted rows:', rows );
        })
        .catch( err => console.error( err.stack ) );
};

// deleteProduct( );