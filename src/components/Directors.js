import React from 'react';
import { directors } from '../data';

const Directors = () => (
  <div>
    <h1>Directors Page</h1>
    {directors.map(director => (
      <div>
        Name: {director.name}
        <br />
        Movies:
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export default Directors
