import React,{useState} from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {

    const[inputValue,setInputValue]=useState('')

    const clear=() => setInputValue('')

    const display=(value)=> {
        setInputValue(inputValue + value);
    }

    const calculate =() => {
        try{
            const result = evaluate(inputValue);
            setInputValue(result.toString());
        }
        catch(error){
            setInputValue(error);
        }
    }

  return (
    <form className='calculator' name="calc">

        <input type="text" value={inputValue} className='value' />

        <span className='num clear' onClick={()=>clear()}>CLEAR</span>
        <span onClick={()=>display('/')}>/</span>
        <span onClick={()=>display('*')}>*</span>
        <span onClick={()=>display('7')}>7</span>
        <span onClick={()=>display('8')}>8</span>
        <span onClick={()=>display('9')}>9</span>  
        <span onClick={()=>display('-')}>-</span>
        <span onClick={()=>display('4')}>4</span>
        <span onClick={()=>display('5')}>5</span>
        <span onClick={()=>display('6')}>6</span>

        <span className='plus' onClick={()=>display('+')}>
            +
        </span>

        <span onClick={()=>display('1')}>1</span>
        <span onClick={()=>display('2')}>2</span>
        <span onClick={()=>display('3')}>3</span>
        <span onClick={()=>display('0')}>0</span>
        <span onClick={()=>display('00')}>00</span>
        <span onClick={()=>display('.')}>.</span>
        <span className="equal num" onClick={()=>calculate()}>
            =
        </span>
    </form>
  )
}

export default Calculator