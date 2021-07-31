const Dragon = require('../dragon');
const { REFRESH_RATE, SECONDS } = require('../config');
const refreshRate = REFRESH_RATE * SECONDS;
console.log('refreshRate',refreshRate);
class Generation{
    constructor(){ 
        this.expiration = this.calaculateExpiration();
        this.generationId = undefined;

    }
 
    calaculateExpiration(){
        //random expiration
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));
        console.log('expirationPeriod',expirationPeriod);

        // 50% longer or shoter period
        const msUntilExpiration = Math.random() < 0.5 ?
        refreshRate - expirationPeriod : 
        refreshRate + expirationPeriod;
        //result added to milisec of new date
        //return new Date()
        return new Date( Date.now() + msUntilExpiration);
    }

    newDragon(){
        if (Date.now() > this.expiration){
            throw new Error (`This generation expired on ${this.expiration}`);
            //string interpolation using template literal string
        }
        return new Dragon( { generationId: this.generationId}); //foreign value
    }
}
   
module.exports = Generation;

// pseudo complex algorithm to calculate the expirations