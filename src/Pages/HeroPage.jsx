import React from 'react';
import { useSelector } from 'react-redux';

export default function HeroPage() {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Ashwathaman_MERN Stack Developer.pdf';
        link.download = 'Ashwathaman_MERN Stack Developer.pdf';
        link.click();
    }
    const screenTheme = useSelector((state) => state.screenTheme);
    return (
        <div className={`w-full md:h-160 flex flex-col md:flex-row px-3 lg:px-20 py-10  ${screenTheme ? "bg-[#010409]" : "bg-[#ffffff]"}`}>
            {/* Left Section */}
            <div className='w-full md:w-3/5 flex flex-col justify-around py-16 items-start mb-10 md:mb-0'>
                <h6 className={`poppins-semibold text-sm md:text-base ${screenTheme ? "text-[#ffffff]" : "text-[#010409]"}`}>
                    Welcome to my portfolio website!
                </h6>

                <h2 className={`text-3xl md:text-5xl font-semibold flex flex-col mt-3 ${screenTheme ? "text-[#ffffff]" : "text-[#010409]"}`}>
                    Hey folks, I'm
                    <ul className={`px-0 dynamic-text mt-2 ${screenTheme ? "dark" : ""}`}>
                        <li className="text-[#fccf05] relative">Ashwathaman R</li>
                        <li className="text-[#fccf05] relative">MERN Stack Developer</li>
                        <li className="text-[#fccf05] relative">Software Test Engineer</li>
                    </ul>
                </h2>

                <p className={`mt-5 md:mt-8 text-base md:text-lg ${screenTheme ? "text-[#ffffff]" : "text-[#010409]"}`}>
                    Building a successful product is a challenge. I am highly energetic in user experience design, interfaces, and web development.
                </p>
                <div className="flex flex-wrap gap-3 py-5">
                    {screenTheme ? (
                        <>
                            {/* Dark theme buttons */}
                            <button
                                onClick={downloadResume}
                                className="flex items-center px-4 md:px-6 py-2.5 md:py-4 border border-[#ffffff] rounded-2xl poppins-semibold text-xs sm:text-sm md:text-base text-[#fff] bg-transparent hover:bg-[#ffffff] hover:text-[#010409] transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-4 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                    />
                                </svg>
                                Download resume
                            </button>

                            <button className="px-4 md:px-6 py-2.5 md:py-4 border border-[#ffffff] rounded-2xl poppins-semibold text-xs sm:text-sm md:text-base text-[#ffffff] hover:bg-[#fccf05] hover:text-[#010409] hover:border-transparent transition-colors duration-300">
                                Get a free quote
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Light theme buttons */}
                            <button
                                onClick={downloadResume}
                                className="flex items-center px-4 md:px-6 py-2.5 md:py-4 border rounded-2xl poppins-semibold text-xs sm:text-sm md:text-base text-[#010409] hover:bg-[#080808] hover:text-[#ffffff] transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-4 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                    />
                                </svg>
                                Download resume
                            </button>

                            <button className="px-4 md:px-6 py-2.5 md:py-4 border rounded-2xl poppins-semibold text-xs sm:text-sm md:text-base text-[#010409] hover:bg-[#fccf05] hover:text-[#010409] hover:border-transparent transition-colors duration-300">
                                Get a free quote
                            </button>
                        </>
                    )}
                </div>

            </div>

            {/* Right Section */}
            <div className='w-full md:w-2/5 flex justify-center items-center'>
                <img src="https://themewagon.github.io/marvel/images/undraw/undraw_software_engineer_lvl5.svg" alt="Home page image" />
            </div>
        </div>
    );
}
