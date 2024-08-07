import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [equation, setEquation] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);

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
    if (answer) {
      setEquation('');
      setFirstNumber('');
      setOperator('');
      setAnswer('');
    }
    setCurrentNumber((prev) => prev + parseInt(input));
  }

  function handleOperatorInput (input) {
    if (answer) {
      setEquation(answer + input);
      setFirstNumber(answer);
      setOperator(input);
      setAnswer('');
      setCurrentNumber('');
      setCurrentNumber('');
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
    switch (input) {
      case '+ | -':
        if (currentNumber) {
          setCurrentNumber((prev) => prev * -1);
        }
        break;
      case '.':
        if (!currentNumber.includes('.')) {
          setCurrentNumber((prev) => prev + '.');
        }
        break;
      case 'C':
        setCurrentNumber('');
        break;
      case 'CE':
        setCurrentNumber('');
        setFirstNumber('');
        setOperator('');
        setEquation('');
        setAnswer('');
        break;
      case 'Backspace':
        setCurrentNumber((prev) => prev.slice(0, -1));
        break;
      case '=':
        solveEquation();
        break;
    }
  }

  function solveEquation () {
    if (firstNumber && operator && currentNumber) {
      setEquation((prev) => prev + currentNumber);
      switch (operator) {
        case '+':
          setAnswer(parseFloat(firstNumber) + parseFloat(currentNumber));
          setHistory((prev) => [parseFloat(firstNumber) + '+' + parseFloat(currentNumber) + '=' + (parseFloat(firstNumber) + parseFloat(currentNumber)), ...prev]);
          break;
        case '-':
          setAnswer(parseFloat(firstNumber) - parseFloat(currentNumber));
          setHistory((prev) => [parseFloat(firstNumber) + '-' + parseFloat(currentNumber) + '=' + (parseFloat(firstNumber) - parseFloat(currentNumber)), ...prev]);
          break;
        case 'x':
          setAnswer(parseFloat(firstNumber) * parseFloat(currentNumber));
          setHistory((prev) => [parseFloat(firstNumber) + 'x' + parseFloat(currentNumber) + '=' + (parseFloat(firstNumber) * parseFloat(currentNumber)), ...prev]);
          break;
        case '/':
          setAnswer(parseFloat(firstNumber) / parseFloat(currentNumber));
          setHistory((prev) => [parseFloat(firstNumber) + '/' + parseFloat(currentNumber) + '=' + (parseFloat(firstNumber) / parseFloat(currentNumber)), ...prev]);
          break;
      }
      setCurrentNumber('');
      setFirstNumber('');
      setOperator('');
    }
  }

  return (
    <div className="m-2">
      <h1>Calculator</h1>
      <div className="container text-center">
        <div className="row gap-2 my-2">
          <input className="form-control col" type="text" value={equation} readOnly></input>
          <p className="col-auto">=</p>
          <input className="form-control col" type="text" value={answer} readOnly></input>
        </div>
        <div className="row gap-2 my-2">
          <input className="form-control col" type="text" value={currentNumber} readOnly></input>
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
        <div className="row gap-2 my-2">
          {history && history.map((equation) => {
            return <p key={equation}>{equation}</p>
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
