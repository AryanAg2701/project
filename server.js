const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://aryanag2701:rcbuaBYUSVEmeXr2@movie.efxigvu.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  console.log(`connected`)
})
.catch(()=>{
  console.log('error')
})

app.get("/",(req,res)=>{
    res.status(200).json(movies);
    }
)
app.post("/api/review1", (req, res) => {
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
});
app.put('/api/review1/:id', (req, res) => {
  const { id ,newrev } = req.params
  if(!newrev){
    return res
    .status(400)
    .json({ message: "All fields (username, rev, rating) are required" });
}

const editrev = { id: id, username, newrev, rating };
reviews.push(editrev);
  res.status(200).json({ message: 'Review edited successfully' })
})

app.delete('/api/review1/:id', (req, res) => {
  const { id } = req.params
  reviews = reviews.filter(review => review.id !== id)
  res.status(200).json({ message: 'Review deleted successfully' })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});