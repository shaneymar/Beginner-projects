import React,{ useState} from 'react'
import './Accordian.css';


const Accordian = ({title, content}) => {
    const[isActive, setIsActive]= useState(false);
  return (
    <div className='accordian-card' key={Math.random()}>
      <div className="header" onClick={()=> setIsActive(!isActive)}>
        <h2>{title}</h2>
        <p className='icon'>
            {isActive ? '-' : '+'}
        </p>
        </div>

        <div className='content'>
            {isActive && <p className='card-info'>{content}</p>}
        </div>
    </div>
  )
}

export default Accordian
