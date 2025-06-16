import React from 'react';
import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard';

// Import the Router component (assuming React Router DOM)
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

function App() {
  
  return (
    <Router>
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 p-4 overflow-auto">
          <TaskBoard />
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App
