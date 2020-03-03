
const mysql = require( 'mysql' );
const path = require( 'path' );
const Sequelize = require('sequelize');

const database = new Sequelize( 'store', 'noble', 'pass', {
    host: 'store_db_1',
    dialect: 'mysql'
});

database
    .authenticate()
    .then( () => {
        console.log( 'Connection has been established successfully.' );
    })
    .catch( err => {
        console.error( 'Unable to connect to the database:', err) ;
    });

// const connection = mysql.createConnection({
//     host: 'store_db_1',
//     database: 'store',
//     user: 'noble',
//     password: 'pass' 
// });

// const config = {
//     host: 'store_db_1',
//     database: 'store',
//     user: 'noble',
//     password: 'pass' 
// };



// connection.connect( function( err ) {
//     if ( err ) {
//         console.error( 'Error connecting: ' + err.stack );
//         return;
//     }
     
//     console.log( 'Connected to mysql.' );
// });

// class Database {
//     constructor( config ) {
//         this.connection = mysql.createConnection({
//             host: 'store_db_1',
//             database: 'store',
//             user: 'noble',
//             password: 'pass' 
//         });
//     }
//     query( sql, args ) {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.query( sql, args, ( err, rows ) => {
//                 if ( err )
//                     return reject( err );
//                 resolve( rows );
//             } );
//         } );
//     }
//     close() {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.end( err => {
//                 if ( err )
//                     return reject( err );
//                 resolve();
//             } );
//         } );
//     }
// }



export default database;