import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Movie from './Movie.jsx';

function Index() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
