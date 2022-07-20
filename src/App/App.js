import React, { Component } from 'react';
import Reservations from '../Reservations';
import Form from '../Form';
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

  // addReservation = (newReservation) => {
  //   this.setState({ reservations: [...this.state.reservations, newReservation] });
  // }

  addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        "name": newReservation.name,
        "date": newReservation.date,
        "time": newReservation.time,
        "number": newReservation.number,
        "id": newReservation.id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => this.setState({ reservations: [...this.state.reservations, newReservation] }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
