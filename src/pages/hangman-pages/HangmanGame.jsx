import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import { RandomWordAndHint } from './RandomWordsAndHint';

function HangmanGame() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [hint, setHint] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const maxAttempts = 6;
  const [totalWordsGuessed, setTotalWordsGuessed] = useState(0);

  const newGame = () => {
    const { word, hint } = RandomWordAndHint();
    setWordToGuess(word);
    setHint(hint);
    setGuessedLetters([]);
    setIncorrectGuesses([]);
    if (incorrectGuesses.length >= maxAttempts) {
      setScore(0);
      setTotalWordsGuessed(0);
    }
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

  const resetScore = () => {
    setScore(0);
  };

  const gameStatus = () => {
    const wordSet = new Set(wordToGuess.split(''));
    const correctGuesses = guessedLetters.filter((letter) =>
      wordSet.has(letter)
    );

    if (correctGuesses.length === wordSet.size) {
      if (guessedLetters.length > 0 || incorrectGuesses.length > 0) {
        setScore(score + 1);
        setTotalWordsGuessed(totalWordsGuessed + 1);
      }
      setWordToGuess('');
      setGuessedLetters([]);
      setIncorrectGuesses([]);
      newGame();
      return 'ongoing';
    } else if (incorrectGuesses.length >= maxAttempts) {
      return 'game over';
    } else {
      return 'ongoing';
    }
  };


  return (
    <div className="App">
      <h1 className='max-lg:text-center text-white lg:text-4xl text-3xl lg:ml-80 mt-6 font-semibold'>Hangman Game</h1>
      <GameBoard
        wordToGuess={wordToGuess}
        hint={hint}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        onNewGame={newGame}
        onGuess={handleGuess}
        gameStatus={gameStatus}
        score={score}
        setScore={setScore}
        resetScore={resetScore}
        totalWordsGuessed={totalWordsGuessed}
      />
    </div>
  );
}

export default HangmanGame;
