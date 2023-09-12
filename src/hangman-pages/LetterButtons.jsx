import React from 'react';

function LetterButton({ letter, onClick, disabled }) {
  return (
    <button
      key={letter}
      onClick={onClick}
      disabled={disabled}
    >
      {letter}
    </button>
  );
}

export default LetterButton;
