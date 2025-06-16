import React from 'react';

const TaskCard = ({ task }) => {
  const { title, category, priority, dueDate, assignees = [], description, projectName } = task;

  // Color mapping for categories
  const categoryColors = {
    Design: 'text-orange-500',
    Development: 'text-purple-500',
    '3D Modeling': 'text-pink-500',
    Marketing: 'text-teal-500',
  };

  // Background mapping for priority badges
  const priorityStyles = {
    High: 'bg-red-100 text-red-500',
    Medium: 'bg-orange-100 text-orange-500',
    Low: 'bg-yellow-100 text-yellow-500',
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-[#e2e2e2] hover:shadow-lg transition-shadow duration-200">
      {/* Category and More Icon */}
      <div className="flex justify-between items-center mb-3">
        <span className={`text-xs font-bold uppercase ${categoryColors[category]}`}>{category}</span>
        <i className="ri-more-2-line text-gray-400 cursor-pointer"></i>
      </div>

      {/* Title */}
      <div className="flex flex-col items-start">
      <h1 className="text-base font-semibold text-gray-800 ">{title}</h1>
      <p className="text-sm font-medium text-gray-500 mb-4">{projectName}</p>
      </div>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* Priority and Date */}
      <div className="flex items-center mb-4">
        <div className={`flex items-center ${priorityStyles[priority]} rounded-full px-2 py-0.5 text-xs font-medium mr-3`}>
          <i className="ri-flag-line mr-1"></i>
          {priority}
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <i className="ri-time-line mr-1"></i>
          {dueDate}
        </div>
      </div>

      {/* Footer: Assignees and Icons */}
      <div className="flex justify-between items-center">
        {/* Assignees */}
        <div className="flex -space-x-3">
          {assignees.map((assignee, index) => (
            <img
              key={index}
              src={assignee}
              alt="Assignee"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Footer Icons */}
        <div className="flex items-center space-x-4 text-gray-400 text-xs">
          <div className="flex items-center space-x-1">
            <i className="ri-link-m"></i>
            <span>16</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="ri-chat-voice-line"></i>
            <span>21</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
