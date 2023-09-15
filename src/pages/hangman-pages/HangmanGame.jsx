import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function HangmanGame() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const maxAttempts = 6;

  const newGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setWordToGuess(randomWord);
    setGuessedLetters([]);
    setIncorrectGuesses([]);
  };

  useEffect(() => {
    newGame();
  }, []);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!wordToGuess.includes(letter)) {
        setIncorrectGuesses([...incorrectGuesses, letter]);
      }
    }
  };

  const gameStatus = () => {
    const wordSet = new Set(wordToGuess.split(''));
    const correctGuesses = guessedLetters.filter((letter) =>
      wordSet.has(letter)
    );
    if (correctGuesses.length === wordSet.size) {
      return 'win';
    } else if (incorrectGuesses.length >= maxAttempts) {
      return 'lose';
    } else {
      return 'ongoing';
    }
  };

  return (
    <div className="App">
      <h1 className='max-lg:text-center text-white lg:text-4xl text-3xl lg:ml-80 mt-6 font-semibold'>Hangman Game</h1>
      <GameBoard
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        onNewGame={newGame}
        onGuess={handleGuess}
        gameStatus={gameStatus}
      />
    </div>
  );
}

export default HangmanGame;
