import React, { Component } from 'react';

class Careto extends Component {
  render() {
    return <div className={`face ${this.props.clase}`}>{this.props.cara}</div>
  }
}
Careto.defaultProps = {
  cara: ':-/',
  clase: 'face--superdark'
}

export default Careto;