import { useState } from "react";

function Calculator() {
  const [equation, setEquation] = useState('');
  const [answer, setAnswer] = useState('');

  function handleClick(e) {
    setEquation((prevState) => getEquationValue(prevState, e.target.value));
  }

  function getEquationValue(prevState, input) {
    let prevInput = prevState[prevState.length - 1];
    let newEquation = prevState;
    if (input === 'CE') {
      return '';
    } else if (input === 'C') {
      return '';
    } else if (input === 'Backspace') {
      newEquation = equation.slice(0, -1);
      return newEquation;
    } else if (input === '=') {
      setAnswer(solveEquation());
      return '';
    } else if (isOperator(input)) {
      if (isOperator(prevInput)) {
        return prevState;
      }
    }
    newEquation += input;
    return newEquation;
  }

  function isOperator(input) {
    return input === '+' || input === '-' || input === 'x' || input === '/';
  }

  function solveEquation() {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="m-2">
      <h1>Calculator</h1>
      <div className="container text-center">
        <div className="row gap-2 my-2">
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
