import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, UpcomingPage, TopRatedPage, SingleFilmPage } from './pages';

export default function App(props) {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li id="navbar-logo">
            <NavLink to="/">DMDB</NavLink>
          </li>
          <li>
            <NavLink to="upcoming">Upcoming</NavLink>
          </li>
          <li>
            <NavLink to="top-rated">Top-Rated</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upcoming" element={<UpcomingPage />} />
        <Route path="top-rated" element={<TopRatedPage />} />
        <Route path="films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}