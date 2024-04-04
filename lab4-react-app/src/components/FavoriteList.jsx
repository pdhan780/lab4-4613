// FavoriteList.jsx
//renders a list of favorites
import React from 'react';
import SingleFavorite from './SingleFavorite';

const FavoriteList = props => {
  return (
    
    <div className = "mt-3">
      <ul className="flex flex-wrap ml-3 bg-black-100">
        {props.favorites.map((favorite) => (
          <SingleFavorite key={favorite.id} favorite={favorite} />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList
