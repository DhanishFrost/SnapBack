import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="flex justify-between bg-blue-500 p-4">
            <div>
                <Link to="/SnapBack/home" className="text-white mr-4">Home</Link>
                <Link to="/SnapBack/calculator" className="text-white mr-4">Calculator</Link>
                <Link to="/SnapBack/games/hangman" className="text-white mr-4">Hangman</Link>                
            </div>
        </div>
    );
}

export default Navigation;