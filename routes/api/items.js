const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Items');

// @route GET request api/items
// @desc Get ALL items
// @access Public
router.get('/', (req,res) => {
    Item.find()
    .sort({date: -1 })
    .then(items => res.json(items))
});

// @route POST request api/items
// @desc Create A Item
// @access Public
router.post('/', (req,res) => {
    
   const newItem = new Item({
       name:req.body.name
   });
   newItem.save().then(item => res.json(item));
});


// @route DELETE request api/items
// @desc Delete A Item
// @access Public
router.delete('/:id', (req,res) => {
    
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({sucess: true})))
    .catch(err => res.status(404).json({sucess: false}))

 });



module.exports = router;