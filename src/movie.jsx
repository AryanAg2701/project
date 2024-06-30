import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import movies from "./app.jsx"

function Movie() {
  const [username, setName] = useState("")
  const [rev, setReview] = useState("")
  const [rating, setRating] = useState("")
  const [reply, setReply] = useState("")
  const [reviewArr, setArr] = useState([])

  const { id } = useParams()

  const movie = movies.find((movie) => movie.id.toString() === id)

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3000/api/movie/${id}/review`)
      .then((response) => {
        setArr(response.data)
      })
      .catch((error) => {
        setReply("Error fetching reviews")
      })
  }

  useEffect(() => {
    fetchReviews()
  }, [id])

  const submit = () => {
    const revDetails = { username, rating, rev }
    axios
      .post(`http://localhost:3000/api/movie/${id}/review`, revDetails)
      .then((response) => {
        setReply(response.data.message)
        setName("")
        setReview("")
        setRating("")
        fetchReviews()
      })
      .catch((error) => {
        setReply("Error posting review")
      })
  }

  const editRev = (uid) => {
    axios
      .put(`http://localhost:3000/api/movie/${id}/review/${uid}`)
      .then((response) => {
        setReply(response.data.message)
        fetchReviews()
      })
      .catch((error) => {
        setReply("Error in editing")
      })
  }

  const clear = () => {
    setName("")
    setReview("")
    setRating("")
    fetchReviews()
  }

  const delRev = (uid) => {
    axios
      .delete(`http://localhost:3000/api/movie/${id}/review/${uid}`)
      .then((response) => {
        setReply(response.data.message)
        fetchReviews()
      })
      .catch((error) => {
        setReply("Error in deleting")
      })
  }

  return (
    <>
      <div>
        <div id="head">
          {movie.name} -- {movie.genre} -- {movie.duration}
        </div>
        <ul>
          {reviewArr.map((review) => (
            <li id="rev" key={review.uid}>
              {review.username}: {review.rating} -- {review.rev}
              <button onClick={() => delRev(review.uid)}>Delete</button>
              <button onClick={() => editRev(review.uid)}>Edit</button>
            </li>
          ))}
        </ul>
        <div id="edit">
          <input
            type="text"
            value={rev}
            onChange={(e) => setReview(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="Review"
          value={rev}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
        <button onClick={clear}>Clear</button>
        <p>{reply}</p>
      </div>
    </>
  )
}

export default Movie
