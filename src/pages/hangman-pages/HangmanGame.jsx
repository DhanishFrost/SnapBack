import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import { RandomWordAndHint } from './RandomWordsAndHint';
import { collection, addDoc, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase_setup/firebase";

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
      saveUserScore();
      return 'gameover';
    } else {
      return 'ongoing';
    }
  };

  const saveUserScore = async () => {
    const user = auth.currentUser;
    const userDocRef = doc(db, "user_scores", user.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      
      if (!Array.isArray(userData.score)) {
        userData.score = [];
      }
      
      const newScore = {
        score: score,
        timestamp: new Date().toISOString(),
      };
  
      userData.score.push(newScore); 
  
      await updateDoc(userDocRef, {
        score: userData.score, 
      });
  
      console.log("Score saved successfully!");
    } else if (score === 0) {
      console.error("Error saving score: Score is not higher.");
    } else {
      const newUserData = {
        name: user.displayName,
        email: user.email,
        score: [{ 
          score: score,
          timestamp: new Date().toISOString(),
        }],
      };
  
      await setDoc(userDocRef, newUserData);
  
      console.log("New user document created with score!");
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
