const {Router} = require('express');
const DragonTable = require('../dragon/table.js')
const router = new Router();

//dragon sub routes
router.get( '/new', (req, res)=>{
    //res.json({dragon: engine.generation.newDragon()}) // out of scope
    //use req.apps.locals
    
    //local dragon const to create new dragon
    const dragon = req.app.locals.engine.generation.newDragon(); // put in our scope


    DragonTable.storeDragon(dragon)
        .then( ({ dragonId })=>{
            console.log('dragonId', dragonId);

            dragon.dragonId= dragonId;
            res.json({ dragon });
        })
        .catch(error => console.error(error));

});

module.exports = router;