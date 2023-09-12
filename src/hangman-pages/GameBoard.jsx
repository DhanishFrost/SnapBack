import React from "react";
import WordDisplay from "./WordDisplay";
import LetterButton from "./LetterButtons";
import HangmanDrawing from "./HangmanDrawing";

function GameBoard({ wordToGuess, guessedLetters, incorrectGuesses, onNewGame, onGuess, gameStatus }) {
    return (
      <div>
        {gameStatus() === 'win' && <div>You win! The word was: {wordToGuess}</div>}
        {gameStatus() === 'lose' && <div>You lose! The word was: {wordToGuess}</div>}
        {gameStatus() === 'ongoing' && (
          <div>
            <HangmanDrawing incorrectGuesses={incorrectGuesses} />
            <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
            <div>Incorrect Guesses: {incorrectGuesses.join(', ')}</div>
            <div>
              Available Letters:
              {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
                <LetterButton
                  key={letter}
                  letter={letter}
                  onClick={() => onGuess(letter)}
                  disabled={guessedLetters.includes(letter)}
                />
              ))}
            </div>
          </div>
        )}
        <button onClick={onNewGame}>New Game</button>
      </div>
    );
  }
  
  export default GameBoard;