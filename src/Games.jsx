import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function Games() {
    const baseUrl = process.env.NODE_ENV === "development" ? "/" : "/SnapBack/";
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-semibold mb-4">Games</h1>
            <div className="lg:flex lg:space-x-10 max-lg:space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center ">
                <Link to="/SnapBack/games/hangman">
                    <div className="max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform">
                        <img
                            src={`${baseUrl}Hangman.jpg`}
                            alt="Game Image"
                            className="w-full h-full absolute inset-0 object-cover rounded-lg"
                        />
                        <div className="bg-black bg-opacity-50 absolute inset-0 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-lg font-[poppins] font-semibold">HangMan</p>
                        </div>
                    </div>
                </Link>
                <Link to="https://forza.net/horizon">
                    <div className="max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform">
                        <img
                            src={`${baseUrl}forza5.jpg`}
                            alt="Game Image"
                            className="w-full h-full absolute inset-0 object-cover rounded-lg"
                        />
                        <div className="bg-black bg-opacity-50 absolute inset-0 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-lg font-[poppins] font-semibold">Forza Horizon</p>
                        </div>
                    </div>
                </Link>
                <Link to="https://www.ubisoft.com/en-gb/game/assassins-creed">
                    <div className="max-lg:w-72 w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform">
                        <img
                            src={`${baseUrl}assassins-creed-valhalla.jpg`}
                            alt="Game Image"
                            className="w-full h-full absolute inset-0 object-cover rounded-lg"
                        />
                        <div className="bg-black bg-opacity-50 absolute inset-0 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-lg font-[poppins] font-semibold">Assassins Creed</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
