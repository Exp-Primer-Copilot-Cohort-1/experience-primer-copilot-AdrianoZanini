// Create web server
const express = require('express')
const app = express()
const port = 3000

// Use middleware to parse request body
app.use(express.json())

// Store comments
let comments = []

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments)
})

// Get a comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id
  const comment = comments.find(comment => comment.id === id)
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' })
  }
  res.json(comment)
})

// Create a comment
app.post('/comments', (req, res) => {
  const comment = {
    id: Date.now().toString(),
    content: req.body.content
  }
  comments.push(comment)
  res.status(201).json(comment)
})

// Update a comment
app.patch('/comments/:id', (req, res) => {
  const id = req.params.id
  const comment = comments.find(comment => comment.id === id)
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' })
  }
  comment.content = req.body.content
  res.json(comment)
})

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id
  const commentIndex = comments.findIndex(comment => comment.id === id)
  if (commentIndex === -1) {
    return res.status(404).json({ message: 'Comment not found' })
  }
  comments.splice(commentIndex, 1)
  res.status(204).end()
})

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})