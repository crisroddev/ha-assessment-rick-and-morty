import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardBox from './Card'
import "../App.css"

function Characters() {
  const [characters, setCharacters]  = useState([]);
  const [page, setPage ] = useState([]);

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        setCharacters(res.data.results)
        setPage(res.data.info)
        
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="py-5 back-color">
      <div className="container">
      <div className="text-center mb-5">
        <button className="btn btn-success pagination-buttons mr-3">Back</button>
        <button className="btn btn-success pagination-buttons">Next</button>
      </div>
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
