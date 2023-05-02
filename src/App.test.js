import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/bookings/BookingForm';

test('Renders the BookingForm button', () => {
  render(<BookingForm />);
  const makeReservation = screen.getByText("Make Your Reservation");
  expect(makeReservation).toBeInTheDocument();
});

test('Date and Time input works correctly', () => {
  render(<BookingForm />);
  const date = screen.getByLabelText(/Choose date/);
  fireEvent.change(date, { target: { value: "2023-04-03" } });
  const time = screen.getByLabelText(/Choose time/);
  fireEvent.change(time, { target: { value: "17:00" } });
  expect(time.value).toEqual("17:00");
});