import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/organic-seeklogo.svg';
import marketingIcon from '../assets/images/circle-small-svgrepo-com.svg';
import developmentIcon from '../assets/images/circle-small-d-svgrepo-com.svg';
import designIcon from '../assets/images/circle-small-do-svgrepo-com.svg';
import modelingIcon from '../assets/images/circle-small-3D-svgrepo-com.svg';
import 'remixicon/fonts/remixicon.css';

const Sidebar = ({ isSidebarVisible }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-72 bg-[#FAF9F8] border-r border-gray-200 transform ${
                isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 z-50 sm:translate-x-0 sm:relative sm:block`}
        >
            {/* Logo and Search */}
            <div className="flex flex-col items-start p-6 border-b border-gray-200">
                <div className="flex flex-col items-start gap-6 w-full">
                    <img src={logo} alt="Logo" className="w-32 h-8" />
                    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1">
                        <i className="ri-search-line text-gray-400 text-lg"></i>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="bg-transparent text-gray-800 ml-2 text-sm w-full focus:outline-none placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* Main Menu */}
            <div className="flex-1 overflow-y-auto p-6">
                <h2 className="text-[#6F7277] text-xs font-semibold mb-4 tracking-widest">MAIN MENU</h2>
                <div className="">
                    {[
                        { to: '/home', icon: 'ri-home-6-line', label: 'Home' },
                        { to: '/projects', icon: 'ri-folder-3-line', label: 'Projects' },
                        { to: '/calendar', icon: 'ri-calendar-line', label: 'Calendar' },
                        { to: '/team', icon: 'ri-group-line', label: 'Team' },
                        { to: '/analytics', icon: 'ri-pie-chart-line', label: 'Analytics' },
                        { to: '/wallet', icon: 'ri-wallet-line', label: 'Wallet' },
                        { to: '/tasks', icon: 'ri-list-check-3', label: 'Tasks' },
                        { to: '/mail', icon: 'ri-mail-line', label: 'Mail' },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className="flex items-center space-x-3 text-gray-600 hover:text-[#4E4ECA] transition-colors hover:bg-[#EDECF5] rounded-lg px-3 py-2"
                        >
                            <i className={`${item.icon} text-lg`}></i>
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Labels */}
                <div className="mt-10">
                    <h2 className="text-gray-400 text-xs font-semibold mb-4 tracking-widest">LABEL</h2>
                    <div className="space-y-4">
                        {[
                            { icon: marketingIcon, label: 'Marketing' },
                            { icon: developmentIcon, label: 'Development' },
                            { icon: designIcon, label: 'Design' },
                            { icon: modelingIcon, label: '3D Modeling' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <img src={item.icon} alt={item.label} className="w-4 h-4" loading="lazy" />
                                <span className="text-sm text-gray-600">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
