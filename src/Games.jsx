import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function Games() {
    const baseUrl = process.env.NODE_ENV === "development" ? "/" : "/SnapBack/";
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-semibold mb-4">Games</h1>
            <Link to="/SnapBack/games/hangman">
                <div className="w-64 h-48 bg-cover bg-center border border-white rounded-lg shadow-md relative hover:scale-105 transition-transform">
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
        </div>
    );
}
