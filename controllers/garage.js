const garage = require('../models/garage');  
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const allgarage = await garage.find({})
    res.render('index.ejs', {garage: allgarage})
})

router.get('/new', async (req, res) => {
    res.render('new.ejs')
})
// Create a new car with make , model and year
router.post('/', async (req, res) => {
    console.log(req.body)
    const allgarage = await garage.create(req.body)
    res.redirect('/garage')
}) 
router.put('/:id', async (req, res) => {
    const id = req.params.id
    await garage.findByIdAndUpdate(id, req.body)
    res.redirect('/garage')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await garage.findByIdAndDelete(id)
    res.redirect('/garage')
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const car = await garage.findById(id)
    res.render('edit.ejs', {garage: car})
})



module.exports = router;