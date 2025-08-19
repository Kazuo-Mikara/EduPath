import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/Logo.png";
import "./NavBar.css"
import SignIn from "../SignIn1"
import { NavLink } from "react-router-dom";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
const NavBar = ({ auth, img, username, email }) => {

    const [showSubMenu, setShowSubMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };
    function findLocation() {
        if (window.location.pathname === '/sign_in' || window.location.pathname === '/sign_up') {
            return true;
        }
        return false;
    }

    // Handle clicks outside of the dropdown menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowSubMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);
    return (
        <>
            <header className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-2">
                    <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
                    <span className="text-2xl font-bold text-primary">ZenEd</span>
                </div>
                <nav className="hidden md:flex justify-between items-center space-x-8 font-nunito">
                    <div className="flex gap-5 justify-around">

                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-link font-poppins  hover:text-primary'} href="#">Home</NavLink>
                        {/* <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-primary' : 'text-link font-poppins  hover:text-primary'} href="#">Courses</NavLink> */}
                        <NavLink to="/pricing" className={({ isActive }) => isActive ? 'text-primary' : 'text-link font-poppins  hover:text-primary'} href="#">Pricing</NavLink>
                        <NavLink to="/mentors" className={({ isActive }) => isActive ? 'text-primary' : 'text-link font-poppins  hover:text-primary'} href="#">Mentors</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary' : 'text-link font-poppins  hover:text-primary'} href="#">Contact us</NavLink>
                    </div>
                    <div className="">
                        {
                            auth ?
                                <div ref={menuRef} className="avatar flex flex-col start-2 relative">
                                    <div
                                        className="flex flex-row gap-2 cursor-pointer items-center"
                                        onClick={toggleSubMenu}
                                    >
                                        <img
                                            alt=""
                                            src={img}
                                            className="bg-cover inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-text font-nunito">{username}</p>
                                        </div>
                                        <svg
                                            className={`w-4 h-4 ml-1 transition-transform duration-300 ${showSubMenu ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                    <div
                                        className={`sub-menu absolute top-14 right-0 bg-white  rounded-md shadow-md w-48 transition-all duration-300 ${showSubMenu ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}
                                    >
                                        <p className="text-text font-semibold">{username}</p>
                                        <p className="text-text text-sm text-gray-500">{email}</p>
                                        <hr className="my-2" />
                                        <ul className=" mt-2">
                                            <li className="hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer flex items-center">
                                                <span>Profile</span>
                                                <FiChevronRight className="ml-auto" />
                                            </li>
                                            <li className="hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer flex items-center">
                                                <span>Settings</span>
                                                <FiChevronRight className="ml-auto" />
                                            </li>
                                            <li className="hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer flex items-center text-red-500">
                                                <span>Logout</span>
                                                <FiChevronRight className="ml-auto" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                : findLocation() ? '' :
                                    <NavLink className="hidden md:block text-white px-3 py-2 rounded-lg bg-primary cursor-pointer hover:opacity-80" to="/sign_up">Get Started</NavLink>


                        }

                    </div>
                </nav>
                {/* <button className="hidden md:block bg-button text-white px-6 py-2 rounded-lg bg-primary ">Get Started</button> */}
                <button className="md:hidden">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </header >
        </>
    );
};

export default NavBar;
