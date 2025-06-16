import React, { useState } from 'react';
import TaskCard from './TaskCard';

const TaskBoard = () => {
  const [activeTab, setActiveTab] = useState('Board'); // State to manage active tab

  const tasks = [
    {
      title: 'Customer Journey Mapping',
      category: 'Design',
      priority: 'Medium',
      dueDate: '25 October',
      assignees: ['/src/assets/images/Profile-picture.png', '/src/assets/images/Profile-picture.png'],
      status: 'To-Do',
      projectName: 'Project Alpha',
      description: 'Mapping the customer journey to identify pain points and opportunities for improvement.',
    },
    {
      title: 'Database Customization',
      category: 'Development',
      priority: 'Medium',
      dueDate: '21 October',
      assignees: ['/src/assets/images/Profile-picture.png', '/src/assets/images/Profile-picture.png'],
      status: 'In Progress',
      projectName: 'Project X',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident libero nam!',
    },
    {
      title: 'Redesign WordPress Website',
      category: 'Design',
      priority: 'High',
      dueDate: '17 October',
      assignees: ['/src/assets/images/Profile-picture.png', '/src/assets/images/Profile-picture.png', '/src/assets/images/Profile-picture.png'],
      status: 'Done',
      projectName: 'Design Lab',
      description: 'Redesigning the website for Design Lab to enhance usability and visual appeal.',
    },
    {
      title: '3D Model Creation',
      category: '3D Modeling',
      priority: 'Low',
      dueDate: '30 October',
      assignees: ['/src/assets/images/Profile-picture.png'],
      status: 'To-Do',
      projectName: '3D Studio',
      description: 'Creating a detailed 3D model for the upcoming product launch.',
    },
    {
      title: 'Social Media Campaign',
      category: 'Marketing',
      priority: 'High',
      dueDate: '15 October',
      assignees: ['/src/assets/images/Profile-picture.png', '/src/assets/images/Profile-picture.png'],
      status: 'In Progress',
      projectName: 'Marketing Team',
      description: 'Planning and executing a social media campaign to boost brand awareness.',
    },
    {
      title: 'SEO Optimization',
      category: 'Development',
      priority: 'Medium',
      dueDate: '28 October',
      assignees: ['/src/assets/images/Profile-picture.png'],
      status: 'Done',
      projectName: 'SEO Project',
      description: 'Optimizing the website for search engines to improve visibility and traffic.',
    },
  ];

  // Group tasks by status
  const todoTasks = tasks.filter((task) => task.status === 'To-Do');
  const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
  const doneTasks = tasks.filter((task) => task.status === 'Done');

  return (
    <div className="flex flex-col p-3">
      {/* Tabs Section */}
      <div className="flex items-center mb-6 border-b border-gray-200">
        {['Board', 'Table', 'Calendar'].map((tab) => (
          <button
            key={tab}
            className={`flex items-center px-4 py-2 text-sm font-medium ${
              activeTab === tab ? 'text-[#4E4ECA] border-b-2 border-[#4E4ECA]' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <i
              className={`mr-2 ${
                tab === 'Board'
                  ? 'ri-book-line'
                  : tab === 'Table'
                  ? 'ri-table-line'
                  : 'ri-calendar-line'
              }`}
            ></i>
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center space-x-4">
          <button className="flex items-center text-gray-500 text-sm">
            <i className="ri-filter-line mr-1"></i> Filter
          </button>
          <button className="flex items-center text-gray-500 text-sm">
            <i className="ri-sort-asc mr-1"></i> Sort
          </button>
        </div>
      </div>

      {/* Content Section */}
      {activeTab === 'Board' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To-Do Section */}
          <div className="bg-purple-50 p-4 rounded-xl space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-purple-600">To-Do</h2>
              <button className="text-xl font-bold text-gray-500">+</button>
            </div>
            {todoTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>

          {/* In Progress Section */}
          <div className="bg-blue-50 p-4 rounded-xl space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-blue-600">In Progress</h2>
              <button className="text-xl font-bold text-gray-500">+</button>
            </div>
            {inProgressTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>

          {/* Done Section */}
          <div className="bg-green-50 p-4 rounded-xl space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-green-600">Done</h2>
              <button className="text-xl font-bold text-gray-500">+</button>
            </div>
            {doneTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Table' && <div>Table View Content</div>}
      {activeTab === 'Calendar' && <div>Calendar View Content</div>}
    </div>
  );
};

export default TaskBoard;
