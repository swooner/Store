
import database from '../../../../mysql/connection';
const Sequelize = require('sequelize');

export const getCategory = ({ id }) => {
    return database.query( 
        `
            SELECT * 
            FROM prod_category
            WHERE Cat_ID = '${ id }'
        `
    , {
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getCategory rows:', rows[ 0 ] );
        return rows[ 0 ]
    });
};

export const getCategoryList = ({ }) => {
    return database.query(
        `
            SELECT * 
            FROM prod_category
        `
        , {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
    })
    .then( rows => {
        // console.log( 'getCategoryList rows:', rows )
        return rows
    })
};
