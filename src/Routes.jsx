import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import HangManGame from './pages/hangman-pages/HangmanGame';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Games from './Games';
import Leaderboard from './pages/hangman-pages/leaderboard';
import Profile from './pages/profile/profile';

export default function AppRoutes({ loggedIn, onLogin }) {
    return (
        <Routes>
            <Route path="/SnapBack/login" element={<Login loggedIn={loggedIn} onLogin={onLogin} />} />
            <Route path="/SnapBack/register" element={<Register />} />
            <Route path="/SnapBack/" element={<Home />} />
            <Route
                path="/SnapBack/gamesHangman"
                element={
                    loggedIn ? (
                        <HangManGame />
                    ) : (
                        <Navigate to="/SnapBack/login" replace />
                    )
                } />
            <Route
                path="/SnapBack/games"
                element={
                    loggedIn ? (
                        <Games />
                    ) : (
                        <Navigate to="/SnapBack/login" replace />
                    )
                }
            />
            <Route path="/SnapBack/gamesHangmanLeaderboard" element={<Leaderboard />} />
            <Route path="/SnapBack/profile" element={<Profile />} />
        </Routes>
    );
}