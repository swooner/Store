
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
    return connection.query( 
        `
            START TRANSACTION;
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

            SELECT  @product_id := LAST_INSERT_ID();

            DELIMITER $$
            CREATE PROCEDURE insertSizes( )
            BEGIN
            DECLARE i int DEFAULT ${ sizes.length };
            WHILE ( i >= 0 ) DO
                SET name := ${ sizes[ 0 ].name };
                SET surcharge := ${ sizes[ 0 ].surcharge };
                INSERT INTO product_size ( PS_P_ID, PS_name, PS_surcharge )
                VALUES ( 
                    @product_id, 
                    @name, 
                    @surcharge
                );
                SET i := i - 1;
                SET shiftArray := ${ sizes.shift( ) };
            END WHILE;
            END;
            $$

            CALL insertSizes( );

            COMMIT;
        `, ( err, res ) => {
            if ( err ) {
                console.log( 'there was an error' );
                throw err
            }
            console.log( 'res:', res );

        })
    //     , {
    //     raw: true,
    //     type: Sequelize.QueryTypes.INSERT 
    // })
    // .then( rows => {
    //     console.log( 'addProduct rows:', rows );
    //     // return rows;
    // })
    // .catch( err => console.error( err.stack ) );
};






//SELECT @product_id: =MAX( P_ID ) + 1
//FROM product;

export const deleteProduct = ({ product_id }) => {
    return database.query(
        `
            DELETE FROM product 
            WHERE P_ID='${ product_id }'
        ` ), {
            type: Sequelize.QueryTypes.DELETE 
        }
        .then( rows => {
            console.log( 'Deleted rows:', rows );
        })
        .catch( err => console.error( err.stack ) );
};