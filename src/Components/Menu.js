import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div className="content">
     {/* Side-Menu */}
    <div className="min-h-screen flex flex-row float-left">
        <div className="flex flex-col bg-blue-custom-1 overflow-hidden pr-6"> 
            <div className="font-sans text-white justify-left ml-6 mt-6 mb-6">
                <h1 className="text-2xl font-bold text-lg">Worker Attendance</h1>
                <h2 className="text-xl">Tracking System</h2>
            </div>
            <ul className="flex flex-col py-4 ml-6">
            <li>
                <a className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Dashboard
                    </Link>
                </a>
            </li>
            <li>
                <a className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Timesheet
                    </Link>
                </a>
            </li>
            <li>
                <a className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Administration
                    </Link>
                </a>
            </li>
            </ul>
            <div className="grid row-span-full gap-y-14 ml-6">
                <a className="cursor-pointer row-start-6 row-end-7 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                <Link to="/">
                        Sign out
                    </Link>
                    </a>
            </div>
        </div>
    </div>
  </div>
);

export default Menu;