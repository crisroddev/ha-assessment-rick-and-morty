import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardBox from './Card'
import "../App.css"

function Characters() {
  const [characters, setCharacters]  = useState([]);

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        setCharacters(res.data.results)
        console.log(setCharacters)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="py-5 back-color">
      <div className="container">
        <div className="row">
          {characters.map(character => <CardBox
            key={character.id}
            character={character}
          />)}
        </div>
      </div>
    </div>
  )
}

export default Characters;
