import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingsPage from './components/BookingsPage';
import ConfirmedBooking from './components/confirmedBooking';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
