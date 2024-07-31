
function Calculator() {
  return (
    <div>
      <h1>Calculator</h1>
      <div className="container text-center">
        <div className="row gap-2 my-2">
          <input className="form-control col" type="text" readOnly></input>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col">CE</button>
          <button className="btn btn-secondary col">C</button>
          <button className="btn btn-secondary col">Backspace</button>
          <button className="btn btn-secondary col">/</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col">1</button>
          <button className="btn btn-secondary col">2</button>
          <button className="btn btn-secondary col">3</button>
          <button className="btn btn-secondary col">x</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col">4</button>
          <button className="btn btn-secondary col">5</button>
          <button className="btn btn-secondary col">6</button>
          <button className="btn btn-secondary col">-</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col">7</button>
          <button className="btn btn-secondary col">8</button>
          <button className="btn btn-secondary col">9</button>
          <button className="btn btn-secondary col">+</button>
        </div>
        <div className="row gap-2 my-2">
          <button className="btn btn-secondary col">+ | -</button>
          <button className="btn btn-secondary col">0</button>
          <button className="btn btn-secondary col">.</button>
          <button className="btn btn-secondary col">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
