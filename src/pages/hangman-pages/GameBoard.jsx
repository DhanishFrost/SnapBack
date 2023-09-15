import React, { useRef } from "react";
import WordDisplay from "./WordDisplay";
import HangmanDrawing from "./HangmanDrawing";


function GameBoard({ wordToGuess, guessedLetters, incorrectGuesses, onNewGame, onGuess, gameStatus }) {
  const correctAudio = useRef(null);
  const incorrectAudio = useRef(null);

  const playCorrectAudio = () => {
    if (correctAudio.current) {
      correctAudio.current.play();
    }
  };

  const playIncorrectAudio = () => {
    if (incorrectAudio.current) {
      incorrectAudio.current.play();
    }
  };

  const handleGuess = (letter) => {
    onGuess(letter);

    if (wordToGuess.includes(letter)) {
      playCorrectAudio();
    } else {
      playIncorrectAudio();
    }
  };


  return (
    <div className="p-4 rounded-lg">
      {gameStatus() === 'win' && (
        <div className="text-green-600 text-2xl font-semibold flex">
          You win! The word was: <p className="uppercase lg:ml-3">{wordToGuess}</p>
        </div>
      )}
      {gameStatus() === 'lose' && (
        <div className="text-red-600 text-2xl font-semibold flex">
          You lose! The word was: <p className="uppercase lg:ml-3">{wordToGuess}</p>
        </div>
      )}
      {gameStatus() === 'ongoing' && (
        <div>
          <HangmanDrawing incorrectGuesses={incorrectGuesses} />
          <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
          <div className="text-red-500 font-semibold text-lg lg:ml-80">
            <span className="border-b-2 border-red-500">Incorrect Guesses:</span>
            <span className="ml-2 uppercase">
              {incorrectGuesses.map((guess, index) => (
                <span
                  key={index}
                  className="bg-red-500 text-white px-2 py-1 rounded-md m-1"
                >
                  {guess}
                </span>
              ))}
            </span>
          </div>
          <div className="lg:mx-80 mt-4 grid grid-cols-8 max-lg:grid max-lg:grid-cols-6">
            {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => {
              const isGuessed = guessedLetters.includes(letter);
              const isIncorrect = incorrectGuesses.includes(letter);

              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  className={`px-4 py-3 font-semibold text-2xl uppercase rounded-lg ${isGuessed && !isIncorrect
                    ? 'border-2 border-green-500 text-green-500'
                    : isIncorrect
                      ? 'border-2 border-red-500 text-red-500 cursor-not-allowed'
                      : 'border-2 border-blue-500 text-white hover:bg-blue-700'
                    }`}
                  disabled={isGuessed || isIncorrect}
                >
                  {letter}
                  
                </button>
              );
            })}
          </div>
          <audio ref={correctAudio} src="/correct.mp3"></audio>
          <audio ref={incorrectAudio} src="/incorrect.mp3"></audio>
        </div>


      )}
      <button
        onClick={onNewGame}
        className="lg:ml-80 mt-6 py-2 px-8 border-2 font-semibol border-green-500 text-white rounded hover:bg-green-600"
      >
        New Game
      </button>
    </div>
  );
}

export default GameBoard;