import React from 'react';
import Card from './Card';
import './Reservations.css';

const Reservations = ( {reservations} ) => {

  const reservationsCards = reservations.map(reservation => {
    // console.log(reservation)
    return (
      <Card 
        name={reservations.name}
        date={reservations.date}
        time={reservations.time}
        number={reservations.number}
        key={reservations.id}
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