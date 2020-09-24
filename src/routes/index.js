const { Router } = require('express')
const router = Router()

const Comment = require('../models/Comment')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/add-comment', (req, res) => {
    const newComment = new Comment(req.body)
    console.log(newComment)
    res.send('Recibido')
})

module.exports = router