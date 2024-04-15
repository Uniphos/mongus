import React from 'react'
import { useState } from 'react'
import '../style/Cards.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import red from './image/Red.webp'
import blue from './image/Blue.webp'
import yellow from './image/Yellow.webp'
import black from './image/Black.webp'
import orange from './image/Orange.webp'
import white from './image/White.webp'
import pink from './image/Pink.webp'
import green from './image/Green.webp'


const Card = (props) =>  {

    const setImg = (color) => {
      console.log(props.id);

        switch(color) {
            case 'Red':
                return red;
            case 'Blue':
                return blue;
            case 'Yellow':
                return yellow;
            case 'Black':
                return black;
            case 'Orange':
                return orange;
            case 'White':
                return white;
            case 'Pink':
                return pink;
            case 'Green':
                return green;
            default:
                return red;
        }

    }

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
        <Link to={'veiw/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
        <img className="Crewmate" src={setImg(props.color)} alt="Crewmate" /> {/* make a seperate function that deals with the color of the crewmate*/}
        <h2 className="Name">{props.name}</h2>
        <h3 className="speed">{ props.speed + " mph" }</h3>
      </div>
  );
};

export default Card;