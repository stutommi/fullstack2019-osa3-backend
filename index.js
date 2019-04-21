if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

morgan.token('body', (req) => JSON.stringify(req.body))

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] :res[header] :response-time ms :body'))
app.use(express.static('build'))

// METHODS

// GET ALL
app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then(persons => res.json(persons.map(p => p.toJSON())))
    .catch(error => next(error))
})

// GET SINGLE
app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(error => next(error))
})


// GET INFO
app.get('/api/info', (req, res, next) => {
  Person.estimatedDocumentCount()
    .then(result => res.send(`<p>luettelossa ${result} henkilöä</p>`))
    .catch(error => next(error))
})

// DELETE
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => res.status(204).end())
    .catch(error => next(error))
})

// PUT
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => res.json(updatedPerson.toJSON()))
    .catch(error => next(error))
})

// POST
app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
    .then(savedPerson => res.json(savedPerson.toJSON()))
    .catch(error => next(error))
})

const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})