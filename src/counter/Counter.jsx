import React,{useState} from 'react'
import './Counter.css';

const Counter = () => {

const[count,setCount] = useState(0);


    function handleIncrement(){
        setCount(count +1);
    }
    function handleDecrement(){
        setCount(count -1);
    }
  return (
    <div className='container'>
        <div>
        <h1 className='number'>{count}</h1>
        </div>

        <div className='btns-container'>
            <button className='increment' onClick={handleIncrement}>Increment</button>
            <button className='increment' onClick={handleDecrement}>Decrement</button>
        </div>
        
        
    </div>
  )
}

export default Counter