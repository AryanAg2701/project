const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
import { useParams } from "react-router-dom";
import movies from "../src/app.jsx"

const app = express();
app.use(express.json());
app.use(cors());

const {id}=useParams();
const movie=movies.find(movie=>(movie.id)===id)

let reviews=[...(movie.review)];

app.get(`/api/movie/${id}/review`,(req,res)=>{
    res.status(200).json(reviews);
    movie.review=[...reviews];
    }
)
app.post(`/api/movie/${id}review`, (req, res) => {
  const { username, rev, rating } = req.body;

  if (!username || !rev || !rating) {
    return res
      .status(400)
      .json({ message: "All fields (username, rev, rating) are required" });
  }

  const newrev = { id: uuidv4(), username, rev, rating };
  reviews.push(newrev);
  res
    .status(201)
    .json({ message: "Review added successfully", booking: newrev });
    movie.review=[...reviews];
}); 
app.put(`/api//movie/${id}/review/:id`, (req, res) => {
  const { id ,newrev } = req.params
  if(!newrev){
    return res
    .status(400)
    .json({ message: "All fields (username, rev, rating) are required" })
};

const editrev = { id: id, username, newrev, rating };
reviews.push(editrev);
  res.status(200).json({ message: 'Review edited successfully' })
  movie.review=[...reviews];
});

app.delete(`/api/movie/${id}/ review/:id`, (req, res) => {
  const { id } = req.params
  reviews = reviews.filter(review => review.id !== id)
  res.status(200).json({ message: 'Review deleted successfully' })
  movie.review=[...reviews];
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});