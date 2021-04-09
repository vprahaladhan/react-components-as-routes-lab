import React from 'react';
import { movies } from '../data';

const Movies = () => (
  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return (
        <div>
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      )
    })}
  </div>
);

export default Movies;