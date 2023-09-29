import React, { useRef } from "react";
import WordDisplay from "./WordDisplay";
import HangmanDrawing from "./HangmanDrawing";
import { Link } from 'react-router-dom';


function GameBoard({
  wordToGuess,
  hint,
  guessedLetters,
  incorrectGuesses,
  onNewGame,
  onGuess,
  gameStatus,
  score,
  setScore,
  resetScore,
  totalWordsGuessed,
}) {
  const correctAudio = useRef(null);
  const incorrectAudio = useRef(null);
  const baseUrl =
    process.env.NODE_ENV === "development" ? "/" : "/SnapBack/";

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

  // Vibrate function
  const vibratePhone = () => {
    if ("vibrate" in navigator) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(200);
    }
  };

  const handleGuess = (letter) => {
    onGuess(letter);

    if (wordToGuess.includes(letter)) {
      playCorrectAudio();
      setScore(score + 1);
    } else {
      playIncorrectAudio();
      vibratePhone();

      if (gameStatus() === 'gameover') {
        resetScore();
      }
    }
  };



  return (
    <div className="p-4 rounded-lg">
      {gameStatus() === 'gameover' && (
        <div className="text-lg lg:text-2xl font-semibold lg:text-center">
          <div className="text-red-600 flex lg:justify-center">
            Game Over! The word was: <p className="uppercase ml-3 ">{wordToGuess}</p>
          </div>
          <div className="text-white flex-1">
            <p>Your score :  {score} points</p>
            <p>Words guessed : {totalWordsGuessed}</p>
          </div>
        </div>
      )}
      {gameStatus() === 'ongoing' && (
        <div>
          <HangmanDrawing incorrectGuesses={incorrectGuesses} />
          
          <div className="lg:flex lg:justify-between lg:mr-80">
            <div>
              <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
              <p className="text-white lg:ml-80 mb-6 text-lg">Hint : {hint}</p>
            </div>
            <div>
              <div className="lg:ml-80 mt-6 text-2xl font-semibold text-white">
                Score: {score}
              </div>
              <div className="lg:ml-80 mt-2 mb-6 text-2xl font-semibold text-white">
                words guessed : {totalWordsGuessed}
              </div>
            </div>
          </div>

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
            {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
              const isGuessed = guessedLetters.includes(letter);
              const isIncorrect = incorrectGuesses.includes(letter);

              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  className={`px-4 py-3 font-semibold text-2xl uppercase rounded-lg ${isGuessed && !isIncorrect
                    ? "border-2 border-green-500 text-green-500"
                    : isIncorrect
                      ? "border-2 border-red-500 text-red-500 cursor-not-allowed"
                      : "border-2 border-blue-500 text-white hover:bg-blue-700"
                    }`}
                  disabled={isGuessed || isIncorrect}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          <audio ref={correctAudio} src={`${baseUrl}correct.mp3`}></audio>
          <audio ref={incorrectAudio} src={`${baseUrl}incorrect.mp3`}></audio>
        </div>
      )}
      {gameStatus() === 'gameover' && (
        <div className="lg:text-center">
          <button
            onClick={onNewGame}
            className=" mt-6 py-2 px-8 border-2 font-semibold border-green-500 text-white rounded hover:bg-green-600"
          >
            New Game
          </button>
        </div>

      )}
    </div>
  );
}

export default GameBoard;
