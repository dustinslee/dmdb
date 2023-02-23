import './upcoming.page.css';
import React, { useEffect, useState } from "react";
import { getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";

export default function UpcomingPage() {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=463eea99b30cfafd8b6bc84a75129e9c&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setList(data.results)
    })
    .catch(error => console.error(error));
  }

  useEffect(() => getFilms(),[]);

  return (
    <div className="films-list-container">
      <div className="films-list-header">
        <h1>Upcoming Movies</h1>
        <div>
        </div>
      </div>
      <ul className="list-with-pic remove-bullet">
        {list.map((film) => {
          return (
            <li key={film.id} className="film-list-container">
              <Link to={`/films/${film.id}`}>
                <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="movie banner" />
                <p>{`${film.title}`}</p>
              </Link>
              <p id="film-releasedt">Release Date: {film.release_date}</p>
            </li>
          )
        })}
        {list.length === 0 && <p className="loading">Loading...</p>}
      </ul>
    </div>
  );
}