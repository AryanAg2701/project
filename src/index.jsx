import React from "react";
import App from "./app.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} 
from "react-router-dom";
import Home from "./pages";
import {Movie1,Movie2,Movie3,Movie4}from "./pages/movie.jsx";

function Index() {
    return (
      <>
        <Router>
            <App />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="movie/:id" element={<Movie/>} />
            </Routes>
        </Router>
        </>
    );
}
 
export default Index;