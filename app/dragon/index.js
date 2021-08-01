// traits.json =  global conf file that defines global values for entire app json array
const TRAITS = require('../../data/traits.json') // TRAITS global const thanever change
const DEFAULT_PROPERTIES = { //globel props that dont change
    nickname: 'unnamed',
    generationId: undefined, //foreign value
    get birthdate(){ // object geter can not have parmas
        return  new Date()  // birthdate: new Date() is static value
    }, // convert to get so date is set at time of being called  
    get randomTraits(){
        const traits = [];
        TRAITS.forEach(TRAIT =>{
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;
            const traitValue = traitValues[Math.floor(Math.random() * traitValues.length )
            ];
            traits.push({traitType,traitValue}) // creates local trait object from traits.json data
        });
        return traits;
    }
} 
//CORE Dragon class; central model for entire app
class Dragon{
    // set prop for instance of a class //construct objects as instances of the class
    constructor({birthdate, nickname, traits, generationId}={}){  // unique values for this class
         // {birthdate,  nickname} set keys so no order of parmaters is not needed
        // ={} set DEFAULT_PROPERTIES if no unique values given
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname; 
        // bind corresponding values to the unique instance of dragon class
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate; 
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;



