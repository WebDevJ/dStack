const Generation = require('./index');
const GenerationTable = require('./table');
class GenerationEngine {
    
    constructor() {
        this.generation = null;
        this.timer = null;
    }

    start(){
        this.buildNewGeneration();
    }
    stop(){
        clearTimeout(this.timer);
    }
    buildNewGeneration() { 
        // store every new generation to the db
        this.generation = new Generation();
        // use the function with out having to make an new instance since it is defined as static
        GenerationTable.storeGeneration(this.generation)
        console.log('new generation', this.generation);

        this.timer = setTimeout(()=> this.buildNewGeneration(),
        this.generation.expiration.getTime() - Date.now());
        // function will call it's self once time has expired.
    }
}

module.exports = GenerationEngine;