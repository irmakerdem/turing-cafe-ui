import React from 'react';
import Card from './Card';
import './Reservations.css';

const Reservations = ( {reservations} ) => {

  const reservationsCards = reservations.map(reservation => {
    // console.log(reservation.id)
    return (
      <div className='reservationsCards'>
        <Card
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          //need to make time to am/pm using StackOverFlow!!!
          number={`Number of guests: ${reservation.number}`}
          key={reservation.id}
        />
        <button>Cancel</button>
      </div>

    )
  })

  return (
    <div>
      {reservationsCards}
    </div>
  )
}

export default Reservations;