import React, { useState, useEffect, useRef } from 'react';
import correctSound from '/correct.mp3';
import wrongSound from '/incorrect.mp3';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleEqual = () => {
        try {
            const res = eval(input);
            setResult(res.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-2xl mb-4">Calculator</div>
                {/* Display for input and result */}
                <div className="mb-4">
                    <div className="mb-2 text-right">{input}</div>
                    <div className="text-2xl text-right">{result}</div>
                </div>
                {/* Keypad */}
                <div className="grid grid-cols-4 gap-2">
                    <button className="col-span-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleClear}>Clear</button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('1')}
                    >
                        1
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('0')}>0</button>
                    {/* New page button */}
                    <button className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonNextPage('nextPage')}>Next Page</button>
                    {/* Add buttons for other digits and operators */}
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('+')}
                    >
                        +
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('-')}
                    >
                        -
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('*')}
                    >
                        *
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('/')}
                    >
                        /
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleEqual}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
