import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingsPage from './components/BookingsPage';
import ConfirmedBooking from './components/confirmedBooking';
import Footer from './components/Footer';

function App() {
  const updateTimes = (state, action) => {
    return state;
  };

  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingsPage state={state} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
