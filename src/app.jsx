import React, { useState, useEffect } from "react";
import axios from "axios";

function App(){
    const [username,setname]=useState("")
    const [review,setreview]=useState("")
    const [movies,setmovie]=useState([])

    return(
        <>
        <div id="main">
            <ul>
                {movies.map((movie)=>
                <li key={movie.id} onClick={()=>openmovie(movie.id)}>
                    <img/>{movie.name} {movie.rating} {movie.genre} 
                </li>
                    )
                }
            </ul>
        </div>
        </>
    )
}
export default App;