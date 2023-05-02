import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Bookings from './components/Bookings';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
