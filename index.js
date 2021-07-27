console.log("hello");
const Generation = require('./generation.js');
const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout( ()=>{
    engine.stop();
}, 20000);

//random generation
const generation = new Generation();
console.log('generation', generation);
//dragon generation

const gooby = generation.newDragon();
console.log('gooby',gooby);

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

