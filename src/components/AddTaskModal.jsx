import React from 'react';

const AddTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/30 flex justify-center items-center">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative z-[101]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Add New Task</h2>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const title = form.title.value.trim();
            const dueDate = form.dueDate.value;
            const description = form.description.value.trim();

            if (!title || !dueDate || !description) {
              alert('All fields are required.');
              return;
            }

            console.log({ title, dueDate, description });

            onClose(); // Close modal
          }}
        >
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
            <input
                name="title"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter task title"
                required
                />

          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
                name="dueDate"
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                />

          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
                name="description"
                rows="3"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write a short description..."
                required
                ></textarea>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#4E4ECA] text-white px-4 py-2 rounded hover:bg-[#3e3eb4] transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
