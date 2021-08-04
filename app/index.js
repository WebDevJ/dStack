console.log("hello");
const Generation = require('./generation/index.js');
const GenerationEngine = require('./generation/engine');
const engine = new GenerationEngine();

const express = require('express');
const app = new express();
const dragonRouter = require('./api/dragon.js')
const generationRouter = require('./api/generation.js')

//bind object called engine to express application
app.locals.engine = engine;
// app.use() middleware functions:
app.use('/dragon', dragonRouter); //sub routes for /dragon
app.use('/generation', generationRouter); //sub routes for /dragon
app.use( (err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    res.json({
        type: 'error', message: err.message
    })
}); // error handling
////////////////////////////////
engine.start();
//express.get( route , callBackFunction)
//app.get( '/dragon/new', (req, res)=>{});
app.get( '/', (req, res)=>{ 
    res.json(`GET = /dragon/new , GET = /generation`)
});



// sect2 webserver& api //setTimeout( ()=>{
//     engine.stop();
// }, 20000);

//random generation
const generation = new Generation();
console.log('generation', generation);
//dragon generation

const gooby = generation.newDragon();
console.log('gooby',gooby);

module.exports = app;

// setTimeout( ()=>{
//     const dooby = generation.newDragon();
// console.log('dooby',dooby);
// }, 15000) // WILL THROW ERROR 

//////////////// sect 1     /////////////////////
// const Dragon = require('./dragon.js');

// const foo = new Dragon({ birthdate:new Date(), nickname:"foo"});
// const boo = new Dragon({ 
//     birthdate:new Date(), 
//     nickname:"boo",
//     traits:[
//         {traitType:'backgroundColor', traitValue: 'black'}
//     ]
// });

// const mii = new Dragon();
// //const goo = new Dragon();

// console.log(foo, 'foo');
// console.log(boo, 'boo');

// console.log(mii, 'mii');
// setTimeout(()=>{
//     const goo = new Dragon();
//     console.log(goo, 'goo');
// }, 3000)
//////////////// sect 1     /////////////////////

