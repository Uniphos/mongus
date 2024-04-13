import React from 'react'
import { useState } from 'react'
import '../style/Cards.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          
          <h2 className="Name">{props.name}</h2>
          <h3 className="speed">{ props.speed + " mph" }</h3>
          <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
      </div>
  );
};

export default Card;