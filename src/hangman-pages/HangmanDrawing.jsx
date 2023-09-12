import React from "react";

export default function HangmanDrawing({ incorrectGuesses }) {
    const MaxAttempts = 6;
    const attempts = incorrectGuesses.length;

    const visibleParts = [
        'head',
        'body',
        'left-arm',
        'right-arm',
        'left-leg',
        'right-leg',
    ].filter((part, index) => index < attempts);

    return (
        <div className="hangman-drawing">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-32 h-32"
            >
                {/* Hangman body parts */}
                <circle
                    key="head"
                    cx="50"
                    cy="30"
                    r="10"
                    className={`hangman-part ${visibleParts.includes('head') ? 'animated' : 'hidden'}`}
                />
                <line
                    key="body"
                    x1="50"
                    y1="40"
                    x2="50"
                    y2="70"
                    className={`hangman-part ${visibleParts.includes('body') ? '' : 'hidden'}`}
                />
                <line
                    key="left-arm"
                    x1="50"
                    y1="45"
                    x2="40"
                    y2="55"
                    className={`hangman-part ${visibleParts.includes('left-arm') ? '' : 'hidden'}`}
                />
                <line
                    key="right-arm"
                    x1="50"
                    y1="45"
                    x2="60"
                    y2="55"
                    className={`hangman-part ${visibleParts.includes('right-arm') ? '' : 'hidden'}`}
                />
                <line
                    key="left-leg"
                    x1="50"
                    y1="70"
                    x2="40"
                    y2="80"
                    className={`hangman-part ${visibleParts.includes('left-leg') ? '' : 'hidden'}`}
                />
                <line
                    key="right-leg"
                    x1="50"
                    y1="70"
                    x2="60"
                    y2="80"
                    className={`hangman-part ${visibleParts.includes('right-leg') ? '' : 'hidden'}`}
                />
            </svg>
        </div>
    );
}

