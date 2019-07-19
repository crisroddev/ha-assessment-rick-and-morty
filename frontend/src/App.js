import React, { Component, Fragment } from "react";
import Characters from './componentes/Characters';
import Header from './componentes/Header';
import Paginator from './componentes/Paginator'

export default class App extends Component {
 
  render() {
    return (
      <Fragment>
        <Header/>
        <Paginator/>
        <Characters/>
      </Fragment>
    );
  }
}
