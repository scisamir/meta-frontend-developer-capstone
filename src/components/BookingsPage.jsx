import React from 'react'
import BookingForm from './bookings/BookingForm'

export default function BookingsPage({ state, dispatch }) {
  return (
    <>
      <BookingForm state={state} dispatch={dispatch} />
    </>
  )
}
