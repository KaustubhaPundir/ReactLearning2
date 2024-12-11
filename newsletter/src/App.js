import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name="Kaustubha";
  render() {
    return (
      <div>
        <h1>hello my name is {this.name} & this is my first class based Component</h1>      
      </div>
    )
  }
}

