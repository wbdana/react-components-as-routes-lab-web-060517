import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( (actor) => {
        return(
          <div>
            <h1>{actor.name}</h1>
            <ul>
            {actor.movies.map( (movie) => {
              return(
                <li>{movie}</li>
              )
            })}
            </ul><br/>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
