const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] :res[header] :response-time ms :body'))
app.use(express.static('build'))

let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '045-1234567'
    },
    {
        id: 2,
        name: 'Arto Järvinen',
        number: '045-1234567'
    },
    {
        id: 3,
        name: 'Lea Kutvonen',
        number: '045-1234567'
    },
    {
        id: 4,
        name: 'Martti Tienari',
        number: '045-1234567'
    }
]

app.get('/api/persons', (req, res) => {
    persons
        ? res.json(persons)
        : res.status(404).end()
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    person
        ? res.json(person)
        : res.status(404).end()
})

app.get('/api/info', (req, res) => {
    res.send(
        `<p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
        <p>${new Date()}</p>`
    )
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' })
    } else if (persons.find(p => p.name === body.name)) {
        return res.status(400).json({ error: 'name must be unique' })
    }

    const person = {
        id: Math.floor(Math.random() * 10000000),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})