console.log("hello");
const Generation = require('./generation.js');
const GenerationEngine = require('./engine');
const engine = new GenerationEngine();

const express = require('express');
const app = new express();
const PORT = 3000;
engine.start();
//express.get( route , callBackFunction)
//app.get( '/dragon/new', (req, res)=>{});
app.get( '/', (req, res)=>{
    res.json("GET = /dragon/new")
});

app.get( '/dragon/new', (req, res)=>{
    res.json({dragon: engine.generation.newDragon()})
});

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))
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

