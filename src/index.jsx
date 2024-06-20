import React from "react";
import Navbar from "./navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} 
from "react-router-dom";
import Home from "./pages";
import Movie1 from "./pages/movie1";
import Movie2 from "./pages/movie2";
import Movie3 from "./pages/movie3";
import Movie4 from "./pages/movie4";

function Index() {
    return (
      <>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movie1" element={<Movie1 />} />
                <Route path="/movie2" element={<Movie2 />} />
                <Route path="/movie3" element={<Movie3 />} />
                <Route path="/movie4" element={<Movie4 />} />
            </Routes>
        </Router>
        </>
    );
}
 
export default Index;