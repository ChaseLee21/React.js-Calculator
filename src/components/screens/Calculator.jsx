import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [equation, setEquation] = useState('');
  const [answer, setAnswer] = useState('');

  function handleClick(e) {
    const input = e.target.value;
    const isNumber = !isNaN(parseInt(input));
    const isOperator = input === '+' || input === '-' || input === 'x' || input === '/';
    if (isOperator) {
      handleOperatorInput(input);
      return;
    }
    if (isNumber) {
      handleNumberInput(input);
      return;
    }
    handleOtherInputs(input);
  }

  function handleNumberInput (input) {
    setCurrentNumber((prev) => prev + parseInt(input));
  }

  function handleOperatorInput (input) {
    if (answer) {
      setFirstNumber(answer);
      setSecondNumber('');
    } else {
      if (currentNumber) {
        setOperator(input);
        setFirstNumber(currentNumber);
        setEquation(currentNumber + input);
        setCurrentNumber('');
      }
    }
  }

  function handleOtherInputs (input) {
    console.log(input);
    switch (input) {
      case input === '+ | -':
        if (currentNumber) {
          setCurrentNumber((prev) => prev * -1);
        }
        break;
      case input === '.':
        if (!currentNumber.includes('.')) {
          setCurrentNumber((prev) => prev + '.');
        }
        break;
      case input === 'C':
        setCurrentNumber('');
        break;
      case input === 'CE':
        setCurrentNumber('');
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
        setEquation('');
        break;
      case input === 'Backspace':
        setCurrentNumber((prev) => prev.slice(0, -1));
        break;
      case input === '=':
        console.log('solve');
        solveEquation();
        break;
    }
  }

  function solveEquation () {
    console.log(firstNumber, operator, currentNumber);
    if (firstNumber && operator && currentNumber) {
      setSecondNumber(currentNumber);
      setEquation((prev) => prev + currentNumber);
      switch (operator) {
        case '+':
          setAnswer(parseFloat(firstNumber) + parseFloat(currentNumber));
          break;
        case '-':
          setAnswer(parseFloat(firstNumber) - parseFloat(currentNumber));
          break;
        case 'x':
          setAnswer(parseFloat(firstNumber) * parseFloat(currentNumber));
          break;
        case '/':
          setAnswer(parseFloat(firstNumber) / parseFloat(currentNumber));
          break;
      }
      setCurrentNumber('');
      setFirstNumber('');
      setSecondNumber('');
      setOperator('');
      console.log(answer);
    }
  }

  return (
    <div className="m-2">
      <h1>Calculator</h1>
      <div className="container text-center">
        <div className="row gap-2 my-2">
          <input className="form-control col" type="text" value={currentNumber} readOnly></input>
          <input className="form-control col" type="text" value={equation} readOnly></input>
          <input className="form-control col" type="text" value={answer} readOnly></input>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col" value={'CE'} onClick={handleClick}>CE</button>
          <button className="btn btn-secondary col" value={'C'} onClick={handleClick}>C</button>
          <button className="btn btn-secondary col" value={'Backspace'} onClick={handleClick}>Backspace</button>
          <button className="btn btn-secondary col" value={'/'} onClick={handleClick}>/</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col" value={1} onClick={handleClick}>1</button>
          <button className="btn btn-secondary col" value={2} onClick={handleClick}>2</button>
          <button className="btn btn-secondary col" value={3} onClick={handleClick}>3</button>
          <button className="btn btn-secondary col" value={'x'} onClick={handleClick}>x</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col" value={4} onClick={handleClick}>4</button>
          <button className="btn btn-secondary col" value={5} onClick={handleClick}>5</button>
          <button className="btn btn-secondary col" value={6} onClick={handleClick}>6</button>
          <button className="btn btn-secondary col" value={'-'} onClick={handleClick}>-</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col" value={7} onClick={handleClick}>7</button>
          <button className="btn btn-secondary col" value={8} onClick={handleClick}>8</button>
          <button className="btn btn-secondary col" value={9} onClick={handleClick}>9</button>
          <button className="btn btn-secondary col" value={'+'} onClick={handleClick}>+</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col" value={'+ | -'} onClick={handleClick}>+ | -</button>
          <button className="btn btn-secondary col" value={0} onClick={handleClick}>0</button>
          <button className="btn btn-secondary col" value={'.'} onClick={handleClick}>.</button>
          <button className="btn btn-secondary col" value={'='} onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
