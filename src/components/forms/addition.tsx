import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { add, div, mult, sub } from '../../redux/actions';
interface Props {
  show: string;
  hide: Function;
}

const Addings: React.FC<Props> = ({ show, hide }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { result, loading } = useSelector((state: any) => state.calculator);

  const [number, setNumber] = useState({
    numb1: '',
    numb2: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNumber({
      ...number,
      [e.target.name]: e.target.value
    });
  };

  const data = {
    ...number,
    numb1: number.numb1 ? parseInt(number.numb1) : 0,
    numb2: number.numb2 ? parseInt(number.numb2) : 0
  };

  const handleAdd = (): void => {
    dispatch(add(data));
    const addDiv = document.querySelector('#result') as HTMLElement;
    if (loading && loading) {
      addDiv.innerHTML = 'Calculating...';
    }
  };

  const handleSub = (): void => {
    const addDiv = document.querySelector('#result') as HTMLElement;
    dispatch(sub(data));
    if (loading && loading) {
      addDiv.innerHTML = 'Calculating...';
    }
  };

  const handleMult = (): void => {
    const addDiv = document.querySelector('#result') as HTMLElement;
    dispatch(mult(data));
    if (loading && loading) {
      addDiv.innerHTML = 'Calculating...';
    }
  };

  const handleDiv = (): void => {
    const addDiv = document.querySelector('#result') as HTMLElement;
    dispatch(div(data));
    if (loading && loading) {
      addDiv.innerHTML = 'Calculating...';
    }
  };

  return (
    <div className="calcForm" id="calcForm" style={{ display: show }}>
      <div className="numbers">
        <span className="hide" onClick={() => hide()}>
          X
        </span>
        <p className="add_results">
          <span id="result">{result && result}</span>
        </p>
        <input
          type="number"
          name="numb1"
          required={true}
          placeholder="Number 1..."
          className="inputs"
          value={number.numb1}
          onChange={handleChange}
        />
        <input
          type="number"
          name="numb2"
          required={true}
          placeholder="Number 2..."
          className="inputs"
          value={number.numb2}
          onChange={handleChange}
        />
        <button className="buttonSubmit" onClick={() => handleAdd()} data-testid="add">
          Add
        </button>
        <button className="buttonSubmit" onClick={handleSub} data-testid="sub">
          SUB
        </button>{' '}
        <br />
        <button className="buttonSubmit" onClick={handleMult} data-testid="mult">
          MULT
        </button>
        <button className="buttonSubmit" onClick={handleDiv} data-testid="div">
          DIV
        </button>
      </div>
    </div>
  );
};

export default Addings;
