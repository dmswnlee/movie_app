import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/movie_detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App