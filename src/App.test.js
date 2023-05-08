import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/bookings/BookingForm';

test('Renders the BookingForm button', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const makeReservation = screen.getByText("Make Your Reservation");
  expect(makeReservation).toBeInTheDocument();
});

test('Date input works correctly', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const date = screen.getByLabelText(/Choose date/);
  fireEvent.change(date, { target: { value: "2023-04-03" } });
  expect(date.value).toEqual("2023-04-03");
});