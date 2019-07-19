import React, { Component, Fragment } from "react";
import Characters from './componentes/Characters';
import Header from './componentes/Header';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Characters/>
      </Fragment>
    );
  }
}
