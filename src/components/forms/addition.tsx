import React, { useState } from "react";
interface Props {
    show: string
    hide: Function
}
const Addings: React.FC<Props> = ({show, hide}) => {
    const [number, setNumber] = useState({
        numb1: "",
        numb2: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumber({
            ...number,
            [e.target.name]: e.target.value 
        })
    }

    const handleAdd = ():void => {
        const addDiv = document.querySelector('#result') as HTMLElement;
        const a = parseInt(number.numb1);
        const b = parseInt(number.numb2);
        addDiv.innerHTML = 'Calculating...';
        setTimeout<[]>(()=> {
            if(isNaN(a+b)) 
            {
                addDiv.innerHTML = `0`
            }else {
                addDiv.innerHTML = `${a+b}`
            } ;
        }, 500);
    }

    const handleSub = ():void => {
        const addDiv = document.querySelector('#result') as HTMLElement;
        const a = parseInt(number.numb1);
        const b = parseInt(number.numb2);
        addDiv.innerHTML = 'Calculating...';
        setTimeout<[]>(()=> {
            if(isNaN(a+b)) 
            {
                addDiv.innerHTML = `0`
            }else {
                addDiv.innerHTML = `${a-b}`
            } ;
        }, 500);
    }

    const handleMult = ():void => {
        const addDiv = document.querySelector('#result') as HTMLElement;
        const a = parseInt(number.numb1);
        const b = parseInt(number.numb2);
        addDiv.innerHTML = 'Calculating...';
        setTimeout<[]>(()=> {
            if(isNaN(a+b)) 
            {
                addDiv.innerHTML = `0`
            }else {
                addDiv.innerHTML = `${a*b}`
            } ;
        }, 500);
    }

    const handleDiv = ():void => {
        const addDiv = document.querySelector('#result') as HTMLElement;
        const a = parseInt(number.numb1);
        const b = parseInt(number.numb2);
        addDiv.innerHTML = 'Calculating...';
        setTimeout<[]>(()=> {
            if(isNaN(a+b)) 
            {
                addDiv.innerHTML = `0`
            }else {
                addDiv.innerHTML = `${a/b}`
            } ;
        }, 500);
    }
    
    return (
        <div className="calcForm" id="calcForm"  style={{display: show}}>
            <div className="numbers">
                <p className="add_results"><span id="result">-</span></p>
                <input type="number" name="numb1" required={true} placeholder="Number 1..." className="inputs"  value={number.numb1} onChange={handleChange} />
                <input type="number" name="numb2" required={true} placeholder="Number 2..." className="inputs" value={number.numb2}  onChange={handleChange} />
                
                <button className="buttonSubmit" onClick={handleAdd}>Add</button> 
                <button className="buttonSubmit" onClick={handleSub}>SUB</button> <br />
                <button className="buttonSubmit" onClick={handleMult}>MULT</button> 
                <button className="buttonSubmit" onClick={handleDiv}>DIV</button>
                <span className="hide" onClick={() => hide()}>Hide</span>
            </div>
        </div>
    )
}

export default Addings;
