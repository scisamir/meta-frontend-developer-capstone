import React from 'react'
import { useReducer } from 'react';
import BookingForm from './bookings/BookingForm'

export default function BookingsPage() {
  const updateTimes = (state, action) => {
    return state;
  };

  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <BookingForm state={state} dispatch={dispatch} />
    </>
  )
}
