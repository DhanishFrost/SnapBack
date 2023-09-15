import React from "react";

export default function WordDisplay({ wordToGuess, guessedLetters }) {
    return (
        <div className="lg:ml-80 mb-10 uppercase text-white text-3xl lg:text-5xl font-semibold ">
            {wordToGuess.split('').map((letter, index) => (
                <span key={index}>
                    {guessedLetters.includes(letter) ? letter : '_ '}
                </span>
            ))}
        </div>
    );
}