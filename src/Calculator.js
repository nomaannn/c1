import React, { useState } from 'react';

function Calculator() {
  // State variables for input fields, result, and error message
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle input changes and validate input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if the input is not empty and is a valid number
    if (value.trim() === '' || isNaN(value)) {
      setErrorMessage('Please enter a valid number.');
    } else {
      setErrorMessage('');
      if (name === 'num1') {
        setNum1(value);
      } else {
        setNum2(value);
      }
    }
  };

  // Function to perform arithmetic operations
  const performOperation = (operator) => {
    if (!num1 || !num2) {
      setErrorMessage('Please enter valid numbers before performing an operation.');
      return;
    }
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        setResult(n1 / n2);
        break;
      default:
        setResult('');
        setErrorMessage('Invalid operation.');
    }
  };

  return (
    <div className='calci'>
      <div>
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          name="num1"
          value={num1}
          placeholder="Enter number 1"
          onChange={handleInputChange}
        />
        <br/>
        <input
          type="text"
          name="num2"
          value={num2}
          placeholder="Enter number 2"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={() => performOperation('+')}>+</button>
        <button onClick={() => performOperation('-')}>-</button>
        <button onClick={() => performOperation('*')}>*</button>
        <button onClick={() => performOperation('/')}>/</button>
      </div>
      <div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {result && <p style={{ color: 'green' }}>Result: {result}</p>}
      </div>
      </div>
    </div>
  );
}

export default Calculator;
