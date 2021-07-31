// methods for generation table
const pool = require('../../databasePool.js');

class GenerationTable {
    // static do not need to create new instance
    static storeGeneration(generation){ // takes one generation object 
        pool.query( 
            //'INSERT INTO generation(expiration) VALUES(${generation.expiration})',
            'INSERT INTO generation(expiration) VALUES($1)',
            // the 1st value in array below. which is really the 0 index. smh. weird node-postgre string interpolation
            [generation.expiration],
            (error, response ) =>{
                if (error) return console.error(error);
            }
        );
    }
}

module.exports = GenerationTable;