import React, { Component } from "react";
import axios from "axios";
import CardBox from './Card'

export default class Characters extends Component {
  constructor(props) {
      super(props);
      this.state =  {
          characters: [],
          nextPage: "",
          prevPage: "",
      }
  }

  componentDidMount() {
      axios.get('/characters')
      .then((res) => {
          this.setState({
              characters: res.data.results,
              nextPage: res.data.info.next,
              prevPage: res.data.info.prev
          })
      });
  }

  handleNextPage = () => {
     axios.get(this.state.nextPage)
     .then((res) => {
         this.setState({
              isLoading: false,
              characters: res.data.results,
              nextPage: res.data.info.next,
              prevPage: res.data.info.prev
         })
     })
  }

  handlePrevPage = () => {
      axios.get(this.state.nextPage)
      .then((res) => {
          this.setState({
               characters: res.data.results,
               nextPage: res.data.info.next,
               prevPage: res.data.info.prev
          })
      })
   }
   render() {
     const characters = this.state.characters;
    
     return (
       <div className="py-5 back-color">
         <div className="container">
         <div className="text-center mb-5">
           <button onClick={this.handlePrevPage} className="btn btn-success pagination-buttons mr-3">Back</button>
           <button onClick={this.handleNextPage}className="btn btn-success pagination-buttons">Next</button>
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
}

