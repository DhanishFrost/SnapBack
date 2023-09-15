import React from "react";

export default function HangmanDrawing({ incorrectGuesses }) {
    const MaxAttempts = 6;
    const attempts = incorrectGuesses.length;

    const hangmanParts = [
        // Head
        { cx: 70, cy: 50, r: 15 },
        // Body
        { x1: 70, y1: 65, x2: 70, y2: 95 },
        // Left Arm
        { x1: 70, y1: 75, x2: 60, y2: 85 },
        // Right Arm
        { x1: 70, y1: 75, x2: 80, y2: 85 },
        // Left Leg
        { x1: 70, y1: 95, x2: 60, y2: 110 },
        // Right Leg
        { x1: 70, y1: 95, x2: 80, y2: 110 },

        ...(incorrectGuesses.length > 0
          ? [
            { x1: 20, y1: 125, x2: 100, y2: 125 },
            { x1: 40, y1: 125, x2: 40, y2: 0 },
            { x1: 40, y1: 0, x2: 75, y2: 0 },
            { x1: 60, y1: 2, x2: 40, y2: 22 }, 
            { x1: 68, y1: 0, x2: 68, y2: 35 },
            ]
          : []),
      ].slice(0, attempts + 6);
      
      return (
        <div className="hangman-drawing flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-44 h-80"
          >
            {hangmanParts.map((part, index) => {
              if (part.cx) {
                return (
                  <circle
                    key={index}
                    cx={part.cx}
                    cy={part.cy}
                    r={part.r}
                    className="hangman-part animated"
                  />
                );
              } else {
                return (
                  <line
                    key={index}
                    x1={part.x1}
                    y1={part.y1}
                    x2={part.x2}
                    y2={part.y2}
                    className="hangman-part"
                  />
                );
              }
            })}
          </svg>
        </div>
      );
}

