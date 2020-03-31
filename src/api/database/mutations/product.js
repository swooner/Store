
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');
import { DateTimeNow } from '../../helpers';

export const addProduct = ({ 
    category_id, 
    name, 
    description, 
    price, 
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
            )
        `, {
        type: Sequelize.QueryTypes.INSERT 
    })
    .then( rows => {
        console.log( 'addProduct rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};

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