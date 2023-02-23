import "./toprated.page.css";
import React, { useEffect, useState } from "react";
import { getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";

export default function TopRatedPage(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=463eea99b30cfafd8b6bc84a75129e9c&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setList(data.results)
    })
    .catch(error => console.error(error));
  }

  useEffect(() => getFilms(),[]);

  let {avg_score, total, latest} = getFilmStats(list);

  //TO-DO: Refactor below, it is being used multiple times throughout app
  return (
    <div className="films-list-container">
      <div className="films-list-header">
        <h1>Top Rated Movies</h1>
        <div>
          <div>
            <span># Of Films: </span>
            <span>{total}</span>
          </div>
          <div>
            <span>Average Rating: </span>
            <span>{avg_score.toFixed(2)}</span>
          </div>
          <div>
            <span>Latest Film: </span>
            <span>{latest}</span>
          </div>
        </div>
      </div>
      <ul className="list-with-pic remove-bullet">
        {list.map((film) => {
          return (
            <li key={film.id} className="film-list-container">
              <Link to={`/films/${film.id}`}>
                <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="movie banner" />
                <p>{`${film.title} (${film.release_date.substring(0,4)})`}</p>
              </Link>
            </li>
          )
        })}
        {list.length === 0 && <p className="loading">Loading...</p>}
      </ul>
    </div>
  );
}