
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');
import mysql from 'mysql';
import { DateTimeNow } from '../../helpers';

const connection = mysql.createConnection({
    host: 'tale22.heyuhnem.com',
    database: 'tale22_COSC3380_store',
    user: 'tale22_Nobel',
    password: 'Nobel' 
});

// console.log( 'connection:', connection );

export const addProduct = ({ 
    category_id, 
    name, 
    description, 
    price, 
    sizes,
    quantity,
    threshold, 
    employee_id
}) => {
    return database.query(
        `
            INSERT INTO product ( P_Cat_ID, P_name, P_description, P_price, P_quantity, P_threshold, P_Cus_ID, P_createdAt ) 
            VALUES ( 
                '${ category_id }', 
                '${ name }', 
                '${ description }', 
                '${ price }', 
                '${ quantity }', 
                '${ threshold }', 
                '${ employee_id }',
                '${ DateTimeNow( ) }'
            );
        `
        ,{
            raw: true,
            type: Sequelize.QueryTypes.INSERT 
        })
        .then( product => {
            console.log( 'product:', product );
            const product_id = product[ 0 ];
            while ( sizes.length ) {
                database.query(
                `
                    INSERT INTO product_size( PS_P_ID, PS_name, PS_surcharge )
                    VALUES(
                        '${ product_id }', 
                        '${ sizes[ 0 ].name }', 
                        '${ sizes[ 0 ].surcharge }' 
                    )   
                `, {
                    raw: true,
                    type: Sequelize.QueryTypes.INSERT 
                })
                .then( rows => {
                    console.log( 'Successfully inserted size:', rows );
                })
                .catch( err => {
                    // database.query(
                    //     `
                    //     DELETE FROM product 
                    //     WHERE P_ID='${ product_id }'
                    //     `, {
                    //     raw: true,
                    //     type: Sequelize.QueryTypes.DELETE 
                    // })
                    console.log( 'There was an error inserting a size:', err );
                })
                console.log( 'STILL HAVE WORK TO DO' );
                sizes.shift( );
                console.log( 'sizes.length:', sizes.length );
            }
    })
    .then( rows => {
        console.log( 'rows:', rows );
        return rows
    })
    .catch( error => {
        console.log( 'error:', error );
    })
};




//SELECT @product_id: =MAX( P_ID ) + 1
//FROM product;

export const deleteProduct = ({ product_id }) => {
    return database.query(
        `
            DELETE FROM product 
            WHERE P_ID='${ product_id }'
        `, {
            type: Sequelize.QueryTypes.DELETE 
        })
        .then( rows => {
            console.log( 'Deleted rows:', rows );
        })
        .catch( err => console.error( err.stack ) );
};


