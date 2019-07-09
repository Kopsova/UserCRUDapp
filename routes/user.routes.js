const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const m = require('../helpers/middlewares')
const bodyParser = require ('body-parser')
var jsonParser = bodyParser.json()
var urlencoderParser = bodyParser.urlencoded({extend:false})


/* All users */
router.get('/', async (req, res) => {
    await user.getUsers()
    .then(users => res.json(users))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})


/* A user by name */
router.get('/:name',  async (req, res) => {
    const thisname = req.params.name
    await user.getUser(thisname)
    
    .then(user => res.json(user))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new user */
router.post('/',   async (req, res) => {
    await user.insertUser(req.body)
    .then(user => res.status(201).json({
        message: `The user ${user.name} has been created`,
        content: user
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Update a user */
router.put('/:name', jsonParser, async (req, res) => {
    const name = req.params.name
    await user.updateUser(name, req.body.age, req.body.email, req.body.password)
    .then(user => res.json({
        message: `The user ${name} has been updated`,
        content: user
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a user */
router.delete('/:name',  async (req, res) => {
    const name = req.params.name

    await user.deleteUser(name)
    .then(user => res.json({
        message: `The user ${name} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router