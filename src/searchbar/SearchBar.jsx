import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const[showInput,setShowInput] = useState(false);
    const[bgColor,setBgColor] =useState('white');

    const handleClick=(e)=>{
        setBgColor("#1a1a1a");

        if(e.target.className=== 'container'){
            setShowInput(false);
            setBgColor('#fff');
        }
    }

    return (
    <section className="container"
    style={{backgroundColor:bgColor}}
    onClick={handleClick}>

        {showInput ? (
            <input type="text" placeholder='search' />
        ) : (
            <FaSearch onClick={()=>setShowInput(true)} style={{color:'#333'}} />
        )}

    </section>
  )
}

export default SearchBar
