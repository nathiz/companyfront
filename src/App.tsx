import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Areas from 'pages/Areas';
import Processos from 'pages/Processos';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/processos" element={<Processos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;