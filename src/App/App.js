import React, { Component } from 'react';
import Reservations from '../Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      reservations:[]
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(data => {
        // console.log(data)
        this.setState( {reservations: data} )
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations />
        </div>
      </div>
    )
  }
}

export default App;
