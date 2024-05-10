import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dieta from './pages/Dieta';
import Treino from './pages/Treino';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dieta" element={<Dieta />} />
          <Route path="/treino" element={<Treino />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;