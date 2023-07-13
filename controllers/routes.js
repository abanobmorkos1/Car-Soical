const route = require('../models/routes');  
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const allRoutes = await route.find({})
    res.render('Rindex.ejs', {route: allRoutes})
})

router.get('/new', async (req, res) => {
    res.render('Rnew.ejs')
})
// Create a new car with make , model and year
router.post('/', async (req, res) => {
    console.log(req.body)
     await route.create(req.body)
    res.redirect('/route')
}) 
router.put('/:id', async (req, res) => {
    const id = req.params.id
    await route.findByIdAndUpdate(id, req.body)
    res.redirect('/route')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await route.findByIdAndDelete(id)
    res.redirect('/route')
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const routes = await route.findById(id)
    res.render('Redit.ejs', {routes})
})



module.exports = router;