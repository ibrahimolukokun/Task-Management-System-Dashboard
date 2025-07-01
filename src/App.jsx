import React from 'react';
import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard';
import AddTaskModal from './components/AddTaskModal';

// Import the Router component (assuming React Router DOM)
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <Router>
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        
      <Navbar 
        toggleSidebar={() => {}} 
        onAddTaskClick={() => setIsModalOpen(true)} />
      <AddTaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} />

        <div className="flex-1 p-4 overflow-auto">
          <TaskBoard />
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App
