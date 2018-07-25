import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Careto from './components/Careto';

class App extends Component {
  render() {
    const faces = [
      {
        face:':)',
        class: ''
      }, {
        
      }, {
        class: 'face--sad'
      }, {
        face: ':-D',
        class: 'face--happy'
      }, {
        face: ':-P',
        class: 'face--happy'
      }
    ];
    return (
      <div className="App">
        <ul>
          {faces.map(function(item){
            return (
              <li><Careto clase={item.class} cara={item.face} /></li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
