import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( (movie) => {
                return(
                  <div>
                    <h3>{movie.title}</h3>
                    <p>Duration: {movie.time}</p>
                    <p>Genres: </p>
                      <ul>
                        {movie.genres.map( (genre) => {
                          return(
                            <li>{genre}</li>
                          )})}
                      </ul><br/>
                  </div>
                )
          })}
    </div>
  );
};

export default Movies;
