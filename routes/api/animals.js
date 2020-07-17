const express = require('express');
const router = express.Router();
const animals = require('../../Animals');


//Gets All Animals
router.get('/', (req,res)=>res.json(animals));

// //Gets All Animals
// router.get('/', (req,res)=>{
//     let keys = Object.keys(req.query);
//     if(keys.length === 0) return res.json(animals)

//     res.json(db.findBy(keys[0], req.query[keys[0]]))
// });

router.get('/cats', (req, res)=>res.json(animals.filter(animal=>animal.type === "cat")));
router.get('/dogs', (req, res)=>res.json(animals.filter(animal=>animal.type === "dog")));


//Get Single Animal
router.get('/:id', (req,res)=>{
    //const found = animals.some(animal => animal.id === parseInt(req.params.id));
    const found = animals.filter(animal => animal.id === parseInt(req.params.id))
    if (found.length > 0) {
        res.json(found);
    } else {
        res.status(400).json({ msg: `No animal with the id of ${req.params.id}`});
    }
});

module.exports = router;

