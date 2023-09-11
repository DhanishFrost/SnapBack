import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './hangman-pages/Calculator';
import Home from './hangman-pages/Home';
import Navigation from './Navigation'
import './index.css'
import HangManGame from './hangman-pages/HangmanGame';


function App() {
  
  return (

    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/games/hangman" element={<HangManGame />} />
        </Routes>
      </div>

    </div>
  );
}


// const navigate = useNavigate();

// const navigateToHome = () => {
//   navigate('/home');
// };

// const navigateToCalculator = () => {
//   navigate('/calculator');
// };

// return (
//   <>
//     <div>
//       <Navigation />
//       <button onClick={navigateToHome}>Go to Home</button>
//       <button onClick={navigateToCalculator}>Go to Calculator</button>
//     </div>
//     <div>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/calculator" element={<Calculator />} />
//       </Routes>
//     </div>

//   </>
// );



export default App
