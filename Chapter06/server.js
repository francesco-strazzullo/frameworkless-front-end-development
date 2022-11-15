const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const PORT = 8080

const app = express()
let todos = []

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
  res.send(todos)
})

app.post('/api/todos', (req, res) => {
  const newTodo = {
    completed: false,
    ...req.body,
    id: uuidv4()
  }

  todos.push(newTodo)

  res.status(201)
  res.send(newTodo)
})

app.patch('/api/todos/:id', (req, res) => {
  const indexToUpdate = todos.findIndex(
    t => t.id === req.params.id
  )
  const oldTodo = todos[indexToUpdate]

  const newTodo = {
    ...oldTodo,
    ...req.body
  }

  todos[indexToUpdate] = newTodo

  res.send(newTodo)
})

app.put('/api/todos/:id', (req, res) => {
  const indexToUpdate = todos.findIndex(
    t => t.id === req.params.id
  )

  todos[indexToUpdate] = req.body

  res.send(req.body)
})

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(
    t => t.id !== req.params.id
  )

  res.status(204)
  res.send()
})

app.listen(PORT)
