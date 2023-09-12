import React from "react";

export default function WordDisplay({ wordToGuess, guessedLetters }) {
    return (
        <div className="word-display">
            {wordToGuess.split('').map((letter, index) => (
                <span key={index}>
                    {guessedLetters.includes(letter) ? letter : '_'}
                </span>
            ))}
        </div>
    );
}