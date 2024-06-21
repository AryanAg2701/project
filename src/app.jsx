import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function App(){
    let movies=[{
        id:1,
        name:"PK",
        duration:"3 hrs",
        genre:"Comedy",
        review:[],
    },
    {
        id:2,
        name:"Dangal",
        duration:"2:30 hrs",
        genre:"Motivation"
    },
    {
        id:3,
        name:"Dhamaal",
        duration:"3:15 hrs",
        genre:"Comedy"
    },
    {
        id:4,
        name:"Bahubali",
        duration:"4 hrs",
        genre:"History"
    },
]
    const openmovie = (uid) => {
        axios
          .get(`http://localhost:3000/api/movie/${uid}`)
          .then((response) => {
            setmovie(response.data);
          })
          .catch((error) => {
            setReply("Error fetching review");
          });
      };
    return(
        <>
        <div>
            <ul>
                {movies.map(({id})=>
                <li key={id} onClick={()=>{openmovie(movie.id)}}>
                    <Link to={`movie/${id}`}>{movie.name} {movie.duration} {movie.genre} </Link>
                </li>
                    )
                }
            </ul>
        </div>
        </>
    )
}
export default App;