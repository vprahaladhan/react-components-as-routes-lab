import React from 'react';
import { actors } from '../data';

const Actors = () => (
  <div>
    <h1>Actors Page</h1>
    {actors.map(actor => (
      <div>
        Name: {actor.name}
        <br />
        Movies:
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export default Actors;