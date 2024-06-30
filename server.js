require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})

const express = require("express")
const { v4: uuidv4 } = require("uuid")
const cors = require("cors")
const movies = require("./src/app.jsx").default

const app = express()
app.use(express.json())
app.use(cors())

app.get(`/api/movie/:id/review`, (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id.toString() === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  res.status(200).json(movie.review)
})

app.post(`/api/movie/:id/review`, (req, res) => {
  const { id } = req.params
  const { username, rev, rating } = req.body

  if (!username || !rev || !rating) {
    return res.status(400).json({ message: "All fields (username, rev, rating) are required" })
  }

  const movie = movies.find(movie => movie.id.toString() === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  const newReview = { id: uuidv4(), username, rev, rating }
  movie.review.push(newReview)
  res.status(201).json({ message: "Review added successfully", review: newReview })
})

app.put(`/api/movie/:id/review/:reviewId`, (req, res) => {
  const { id, reviewId } = req.params
  const { username, rev, rating } = req.body

  if (!username || !rev || !rating) {
    return res.status(400).json({ message: "All fields (username, rev, rating) are required" })
  }

  const movie = movies.find(movie => movie.id.toString() === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  const reviewIndex = movie.review.findIndex(review => review.id === reviewId)
  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Review not found" })
  }

  movie.review[reviewIndex] = { id: reviewId, username, rev, rating }
  res.status(200).json({ message: 'Review edited successfully' })
})

app.delete(`/api/movie/:id/review/:reviewId`, (req, res) => {
  const { id, reviewId } = req.params

  const movie = movies.find(movie => movie.id.toString() === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" })
  }

  movie.review = movie.review.filter(review => review.id !== reviewId)
  res.status(200).json({ message: 'Review deleted successfully' })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
