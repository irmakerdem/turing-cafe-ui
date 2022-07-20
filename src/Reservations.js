import React from 'react';
import Card from './Card';
import './Reservations.css';

const Reservations = ( {reservations} ) => {

  const reservationsCards = reservations.map(reservation => {
    // console.log(reservation)
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={`Number of guests: ${reservation.number}`}
        key={reservation.id}
      />
    )
  })

  return (
    <div>
      {reservationsCards}
    </div>
  )
}

export default Reservations;