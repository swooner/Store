
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');


// get a single product
export const getProduct = ({ id }) => {
    // console.log( 'id:', id );
    return database.query(
        `
            SELECT * 
            FROM product 
            WHERE P_ID = '${ id }'
        `, {
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
    return database.query(
            `
            SELECT * 
            FROM product
            ORDER BY P_Cat_ID`
        , {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getProducts rows:', rows );
        return rows
    })
};

export const getProductSize = ({ id }) => {
    // console.log( 'id:', id );
    return database.query(
        `
            SELECT *
            FROM product_size
            WHERE PS_ID=${ id }
        `,{
            raw: true,
            type: Sequelize.QueryTypes.SELECT
        }
    )
    .then( rows => {
        // console.log( 'getProductSize rows:', rows[ 0 ] );
        return rows[ 0 ]
    })
    .catch( err => console.error( err.stack ) )
};

export const getProductSizes = ({ product_id }) => {
    return database.query(
        `
            SELECT *
            FROM product_size
            WHERE PS_P_ID=${ product_id }
        `,{
            raw: true,
            type: Sequelize.QueryTypes.SELECT
        }
    )
    .then( rows => {
        // console.log( 'getProductSizes rows:', rows );
        return rows
    })
    .catch( err => console.error( err.stack ) )
};


export const getProductsByCategoryId = ({ category_id }) => {
    return database.query(
            `
                SELECT * 
                FROM product
                WHERE P_Cat_ID = '${ category_id }'
            `
        , {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getProducts rows:', rows );
        return rows
    })
};

export const getProductsByCategoryName = ({ category_name }) => {
    return database.query(
            `
                SELECT product.* 
                FROM product, prod_category
                WHERE prod_category.Cat_name = '${ category_name }'
                    AND product.P_Cat_ID = prod_category.Cat_ID
            `
        , {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getProducts rows:', rows );
        return rows
    })
};

export const getRestockStatus = ({ product_id }) => {
    return database.query(
        `
            SELECT 
                *
            FROM 
                inventory_order
            WHERE
                IO_P_ID = ${ product_id }

        `, {
            raw: true,
            type: Sequelize.QueryTypes.SELECT
        }
    )
    .then( rows => {
        console.log( 'getRestockStatus rows:', rows );
        // return rows
    })
    .catch( err => console.error( err.stack ) )
}