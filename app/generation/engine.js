const Generation = require('./index');

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
        this.generation = new Generation();
        console.log('new generation', this.generation);

        this.timer = setTimeout(()=> this.buildNewGeneration(),
        this.generation.expiration.getTime() - Date.now());
        // function will call it's self once time has expired.
    }
}

module.exports = GenerationEngine;