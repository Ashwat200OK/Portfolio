import React, { useState } from "react";
import { motion } from "framer-motion";
import { changeTheme } from '../Slices/Theme'
import { useDispatch, useSelector } from "react-redux";

function HoverLink({ text, screenTheme }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative inline-block overflow-hidden h-6 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="invisible">{text}</span>

            {/* Default text */}
            <motion.span
                className={`absolute left-0 top-0 ${screenTheme ? "text-[#ffffff]" : "text-[#676768]"
                    } text-[13px] poppins-semibold`}
                animate={{ y: hovered ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {text}
            </motion.span>

            {/* Hover text */}
            <motion.span
                className="absolute left-0 top-0 text-[#fccf05] text-[13px] poppins-semibold"
                animate={{ y: hovered ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {text}
            </motion.span>
        </div>
    );
}

export default function Navbar() {
    // const [screenTheme, setScreenTheme] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch()
    const screenTheme = useSelector((state) => state.screenTheme);

    const changeUIColor = () => dispatch(changeTheme());
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <div
            className={`w-full px-5 md:px-20 lg:px-30 h-16 flex items-center justify-between ${screenTheme ? "bg-[#010409]" : "bg-[#ffffff]"
                }`}
        >
            {/* Left: Logo */}
            <button className="flex items-center">
                <img src="./logo.png" alt="Logo" className="w-23" />
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke={screenTheme ? "#ffffff" : "#010409"}
                    className="size-9 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                </svg>
                <h1
                    className={`text-xl ml-3 saira-fronttext h-[34px] flex items-end font-bold ${screenTheme ? "text-[#ffffff]" : "text-[#010409]"
                        }`}
                >
                    Ash<span className="text-[#fccf05]">Stack</span>
                </h1> */}
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-5 items-center">
                <li>
                    <a href="#about">
                        <HoverLink text="About" screenTheme={screenTheme} />
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        <HoverLink text="Skills" screenTheme={screenTheme} />
                    </a>
                </li>
                <li>
                    <HoverLink text="Project" screenTheme={screenTheme} />
                </li>
                <li>
                    <HoverLink text="Resume" screenTheme={screenTheme} />
                </li>
                <li>
                    <HoverLink text="Contact" screenTheme={screenTheme} />
                </li>
            </ul>

            {/* Right: Toggle theme + Mobile menu icon */}
            <div className="flex items-center gap-4">
                <button onClick={changeUIColor}>
                    {screenTheme ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 
                6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 
                1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
                12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 
                15.75c-5.385 0-9.75-4.365-9.75-9.75 
                0-1.33.266-2.597.748-3.752A9.753 
                9.753 0 0 0 3 11.25C3 16.635 7.365 
                21 12.75 21a9.753 9.753 0 0 0 
                9.002-5.998Z"
                            />
                        </svg>
                    )}
                </button>

                {/* Hamburger menu icon */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className={`w-6 h-6 ${screenTheme ? "text-white" : "text-black"
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                menuOpen
                                    ? "M6 18L18 6M6 6l12 12" // X icon
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <motion.div
                    className={`absolute top-16 left-0 w-full px-5 py-4 z-50 flex flex-col gap-4 md:hidden ${screenTheme ? "bg-[#010409]" : "bg-white"
                        }`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <HoverLink text="About" screenTheme={screenTheme} />
                    <HoverLink text="Project" screenTheme={screenTheme} />
                    <HoverLink text="Resume" screenTheme={screenTheme} />
                    <HoverLink text="Contact" screenTheme={screenTheme} />
                </motion.div>
            )}
        </div>
    );
}
