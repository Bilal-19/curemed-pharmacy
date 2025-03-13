import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/curemed-pharmacy/company_logo.png" alt="Cure Med Pharmacy Logo" />
                </Link>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Navigation Menu */}
                <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="font-light flex flex-col p-4 md:p-0 mt-4 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 ms-start">
                        <li>
                            <NavLink to="/" className="block py-2 px-3">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="block py-2 px-3">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="block py-2 px-3">
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block px-3 py-2 inline-flex items-center" type="button">Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>

                            {isDropdownOpen && (
                                <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-30">
                                    <ul className="py-2  text-gray-700">
                                        <li>
                                            <NavLink to="/about" className="block py-2 px-3 hover:bg-gray-100">
                                                About Us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/career" className="block py-2 px-3 hover:bg-gray-100">
                                                Career
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact" className="block py-2 px-3 hover:bg-gray-100">
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}