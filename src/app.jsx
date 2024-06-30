import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "PK",
      duration: "3 hrs",
      genre: "Comedy",
      review: [],
    },
    {
      id: 2,
      name: "Dangal",
      duration: "2:30 hrs",
      genre: "Motivation",
      review: [],
    },
    {
      id: 3,
      name: "Dhamaal",
      duration: "3:15 hrs",
      genre: "Comedy",
      review: [],
    },
    {
      id: 4,
      name: "Bahubali",
      duration: "4 hrs",
      genre: "History",
      review: [],
    },
  ]);

  return (
    <>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <div id="list">
                <Link to={`movie/${movie.id}`}>
                  {movie.name} {movie.duration} {movie.genre}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
