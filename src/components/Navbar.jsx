import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="flex justify-between items-center bg-[#FAF9F8] px-8 py-4 border-b border-gray-200">
            {/* Left Section: Title */}
            <div className="flex items-center space-x-4">
                <i
                    className="ri-menu-line text-gray-600 text-xl cursor-pointer"
                    onClick={toggleSidebar} // Toggle sidebar visibility
                ></i>
                <h1 className="text-xl font-semibold text-gray-800">Tasks</h1>
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center space-x-6">
                {/* Add Task Button */}
                <button className="flex items-center bg-none text-[#4E4ECA] rounded-lg px-4 py-2 border hover:text-white hover:bg-[#454589] transition-colors">
                    <i className="ri-add-line text-lg"></i>
                    <span className="ml-2 text-sm font-medium">Add Task</span>
                </button>

                {/* Notifications Icon */}
                <div className="relative cursor-pointer">
                    <i className="ri-notification-3-line text-gray-600 text-xl"></i>
                    
                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                        3
                    </span>
                </div>

                {/* Profile Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="../assets/images/Profile-picture.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
