import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation({ loggedIn, onLogin, handleLogout }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const routesToHideNavigation = ['/SnapBack/login', '/SnapBack/register'];
    const shouldHideNavigation = routesToHideNavigation.includes(location.pathname);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    if (shouldHideNavigation) {
        return null;
      }
    

    return (
        <div>
            <nav className="bg-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/SnapBack/home">
                        <img className="w-12 h-12" src="/Snapback-Logo.png" alt="SnapBack Logo" />
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white p-2 md:hidden"
                        x-transition:enter="transition duration-300 ease-out transform"
                        x-transition:enter-start="opacity-0 scale-90"
                        x-transition:enter-end="opacity-100 scale-100"
                        x-transition:leave="transition duration-200 ease-in transform"
                        x-transition:leave-start="opacity-100 scale-100"
                        x-transition:leave-end="opacity-0 scale-90"

                                        >
                                            {isMobileMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                    <ul className="flex space-x-8 md:flex max-md:hidden">
                        <li className='mt-0.5'>
                            <Link
                                to="/SnapBack/"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Home
                            </Link>
                        </li >
                        <li className='mt-0.5'>
                            <Link
                                to="/SnapBack/games"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Games
                            </Link>
                        </li>
                        <li className='mt-0.5'>
                        <Link
                                to="/SnapBack/games/hangman/leaderboard"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Hangman LeaderBoard
                        </Link>
                        </li>
                        <li className='mt-0.5'>
                        <Link
                                to="/SnapBack/profile"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Profile
                        </Link>
                        </li>
                        {loggedIn ? (
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li className='mt-0.5'>
                                <Link
                                    to="/SnapBack/login"
                                    className="text-white mr-12 uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                        <li className='mt-0.5'>
                            <Link
                                to="/SnapBack/games"
                                className="text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900"
                            >
                                Play Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black absolute top-16 left-0 right-0 z-50">
                    <ul className="text-white text-center py-4">
                        <li className='mb-6'>
                            <Link to="/SnapBack/" className="block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold" onClick={toggleMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='my-6'>
                            <Link to="/SnapBack/games" className="block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold" onClick={toggleMobileMenu}>
                                Games
                            </Link>
                        </li>
                        <li className='my-6'>
                        <Link
                                to="/SnapBack/games/hangman/leaderboard"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Hangman LeaderBoard
                        </Link>
                        </li>
                        <li className='my-6'>
                        <Link
                                to="/SnapBack/profile"
                                className="text-white uppercase tracking-widest font-[poppins] hover:bg-[gray]/40 hover:border-b-2 border-[#FF3342] py-1 px-4 rounded-lg text-md font-semibold transition duration-300"
                            >
                                Profile
                        </Link>
                        </li>
                        {loggedIn ? (
                           <li className='my-6'>
                           <button
                               onClick={handleLogout}
                               className="text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold"
                           >
                               Logout
                           </button>
                       </li>
                        ) : (
                            <li className='my-6'>
                                <Link to="/SnapBack/login" className="block text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold" onClick={toggleMobileMenu}>
                                    Login
                                </Link>
                            </li>
                        )}
                        <li className='mt-0.5 my-6'>
                            <Link
                                to="/SnapBack/games"
                                className="text-white uppercase tracking-widest font-[poppins] py-1 px-4 rounded-lg text-md font-semibold transition duration-300 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900"
                            >
                                Play Now
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    );
}
