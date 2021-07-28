const {Router} = require('express');

const router = new Router();


//dragon sub routes
router.get( '/new', (req, res)=>{
    //res.json({dragon: engine.generation.newDragon()}) // out of scope
    //use req.apps.locals
    res.json({dragon: req.app.locals.engine.generation.newDragon()}) // out of scope

});


module.exports = router;