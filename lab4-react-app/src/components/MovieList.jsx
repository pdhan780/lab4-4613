// MovieList.jsx
//renders a list of movies
import React from 'react';
import SingleMovie from './SingleMovie';

const MovieList = props => {
  return (
    //the ul for containing all the movies
    
    <ul className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {props.movies.map((movie) => (
        <SingleMovie key={movie.id} movie={movie} addToFavorites={props.addToFavorites} />
      ))}
    </ul>
  );
};

export default MovieList;
