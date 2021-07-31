// methods for generation table
const pool = require('../../databasePool.js');

class GenerationTable {
    // static do not need to create new instance
    static storeGeneration(generation){ // takes one generation object 
        // use promise to return values within inner call back, force function to forfill or break promise.

        // return new Promise( (resolve, reject )=>{
        // })
        return new Promise( (resolve, reject )=>{
        
            pool.query( 
                //'INSERT INTO generation(expiration) VALUES(${generation.expiration})',
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id', // RETURNING id value that db created after insertion.
                // the 1st value in array below. which is really the 0 index. smh. weird node-postgre string interpolation
                [generation.expiration],
                (error, response ) =>{
                    if (error) return reject.error(error); // instead of //console.error
                    // store returning id created by db
                    const generationId = response.rows[0].id;
                    resolve({generationId}); // forfill promise while in the callback function and return value.
                }
            );
        })
    }
}

module.exports = GenerationTable;