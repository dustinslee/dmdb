import './home.page.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const[movieData, setMovieData] = useState([]);
  // const [list, setList] = useState(["ready","set","go"]);
  // const [text, setText] = useState("");


  function getMovieData() {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=463eea99b30cfafd8b6bc84a75129e9c")
    .then(res => res.json())
    .then(data => setMovieData(data.results))
    .catch(err => console.error(err));
  }

  useEffect(() => getMovieData(), []);

  // TO-DO: Implement Search w/ search results page
  // function onSubmit(e) {
  //   e.preventDefault();

  //   setList([...list, text]);
  //   setText("");
  // }

  //TO-DO: Refactor below, it is being used multiple times throughout app
  // Move search bar into nav bar
  return (
    <div className="homepage-container">
      <h1>Trending Movies This Week</h1>
      {/* <form onSubmit={onSubmit}>
        <label htmlFor="listInput">Search: &nbsp;</label>
        <input 
          id="listInput"
          type="text"
          name="listInput" 
          maxLength="50"
          placeholder="The Lion King"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}/>
        &nbsp;
        <button type="submit">&nbsp;Search</button>
      </form> */}
      <ul className="list-with-pic remove-bullet">
        {movieData.map((film) => {
          return (
            <li key={film.id} className="film-list-container">
              <Link to={`/films/${film.id}`}>
                <img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt="movie banner" />
                <p>{`${film.title} (${film.release_date.substring(0,4)})`}</p>
              </Link>
            </li>
          )
        })}
        {movieData.length === 0 && <p className="loading">Loading...</p>}
      </ul>
    </div>
  );
}