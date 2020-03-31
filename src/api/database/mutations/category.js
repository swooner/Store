
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const addCategory = ({ name, description, employee_id }) => {
    // console.log( 'name:', name );
    // console.log( 'description:', description );
    // console.log( 'employee_id:', employee_id );
    return database.query( 
        `
            INSERT INTO prod_category ( Cat_name, Cat_description, Cat_Cus_ID ) 
            VALUES ( '${ name }', '${ description }', ${ employee_id } )
        `, {
        type: Sequelize.QueryTypes.INSERT 
    })
    .then( rows => {
        console.log( 'addCategory rows:', rows );
        return rows;
    })
    .catch( err => console.error( err.stack ) );
};

export const deleteCategory = ({ category_id }) => {
    return database.query(
        `
            DELETE FROM prod_category 
            WHERE Cat_ID='${ category_id }'
        ` ), {
            type: Sequelize.QueryTypes.DELETE 
        }
        .then( rows => {
            console.log( 'deleteCategory rows:', rows );
        })
        .catch( err => console.error( err.stack ) );
};