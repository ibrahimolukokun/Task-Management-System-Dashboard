import React from 'react';

const StatusSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* To-Do Section */}
            <div className="bg-purple-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-purple-500 text-lg font-semibold">To-Do</h1>
                    <i className="ri-add-line text-purple-500 text-xl cursor-pointer"></i>
                </div>
                <div className="space-y-4">
                    {/* Task cards will be rendered here */}
                </div>
            </div>

            {/* In Progress Section */}
            <div className="bg-blue-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-blue-500 text-lg font-semibold">In Progress</h1>
                    <i className="ri-add-line text-blue-500 text-xl cursor-pointer"></i>
                </div>
                <div className="space-y-4">
                    {/* Task cards will be rendered here */}
                </div>
            </div>

            {/* Done Section */}
            <div className="bg-green-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-green-500 text-lg font-semibold">Done</h1>
                    <i className="ri-add-line text-green-500 text-xl cursor-pointer"></i>
                </div>
                <div className="space-y-4">
                    {/* Task cards will be rendered here */}
                </div>
            </div>
        </div>
    );
};

export default StatusSection;