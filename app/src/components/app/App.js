import React, { Component } from 'react';
import './App.css';
import Pannel from '../pannel/Pannel'
import Visor from '../Visor'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  handleClick = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div className="App">
        <Visor value={this.state.value} />
        <Pannel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;