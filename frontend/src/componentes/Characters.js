import React, {  useEffect } from "react";
import axios from 'axios';
import "../App.css"

function Characters() {

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
      <div>Hi</div>
  )
}

export default Characters;
