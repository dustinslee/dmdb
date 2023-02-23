import "./singlefilm.page.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleFilmPage() {
  const [item, setItem] = useState("");
  const {id} = useParams();

  function getFilm() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=463eea99b30cfafd8b6bc84a75129e9c&language=en-US`)
    .then(res => res.json())
    .then(data => setItem(data))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div className="singlefilm-page-container">
      <div className="singlefilm-page-header">
        <h1>{item.title}</h1>
        <p>{`Original title: ${item.original_title}`}</p>
        <p>
          <span>{item.release_date}</span> &nbsp;
          <span>{`${item.runtime} mins`}</span>
        </p>
      </div>
      <div className="img-container">
        <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={`${item.title} Poster`} />
      </div>
      <div className="film-info-container">
        <p>
          The film was released in <strong>{item.release_date}</strong> and garnered
          a <strong>{item.vote_average}</strong> aggregate score based on <strong>{item.vote_count}</strong> votes.
        </p>
        <h2>Description</h2>
        <p id="description-body">{item.overview}</p>
      </div>
    </div>
  )
}
