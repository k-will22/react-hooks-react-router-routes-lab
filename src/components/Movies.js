import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesArray = movies.map(movie => {
    return (<div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time}minutes</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>)
  })
  return <div>
    <h1>Movies Page</h1>
    {moviesArray}
    </div>;
}

export default Movies;
