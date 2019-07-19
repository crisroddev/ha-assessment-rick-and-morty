import React, { Component } from 'react';
import ha_logo from "../img/ha_logo.png"
import "../App.css"

export default class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-sm px-sm-5 d-flex justify-content-center">
            <img src={ha_logo} alt="HA" className="navbar-brand"/>
            <h1>Housing Anywhere Assestment - Rick and Morty API</h1>
        </nav>
        
    }
}

