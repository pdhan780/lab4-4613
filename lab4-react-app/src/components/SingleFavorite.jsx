// SingleMovie.jsx
//renders a single movie
import React from 'react';

const SingleFavorite = props => {
    return (
        <li className="flex items-center mr-4 mb-4">
      <img src={"https://image.tmdb.org/t/p/w92/" + props.favorite.poster} alt={props.favorite.tagline} className="w-16 h-auto" />
       </li>
    )
  };
  


export default SingleFavorite;

