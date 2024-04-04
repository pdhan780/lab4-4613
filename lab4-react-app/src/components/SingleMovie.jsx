// SingleMovie.jsx
//renders a single movie
import React from 'react';

const SingleMovie = props => {

  //function for when favorites button is clicked  
  const handleAddToFavorites = () => {
    props.addToFavorites(props.movie);
  };

  return (
    <li className="w-64 h-98 mb-2 mt-2 flex flex-col justify-between mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <img className="max-w-xs h-44 object-cover" src={"https://image.tmdb.org/t/p/w342" + props.movie.poster} alt={props.movie.title} />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-gray-800 font-semibold text-lg capitalize">{props.movie.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{props.movie.tagline}</p>
      </div>
      <div className="flex justify-center"> {/* Flex container for centering */}
      <button className="w-10 h-10 bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center" onClick={handleAddToFavorites}> 
        <i className="fas fa-heart"></i>
      </button>
    </div>
    </li>
  );
};

export default SingleMovie;
