import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( (director) => {
        return(
          <div>
            <h1>{director.name}</h1>
            <p>Movies: </p>
            <ul>
              {director.movies.map( (movie) => {
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
}

export default Directors
