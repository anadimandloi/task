import React from 'react';

function FavouriteCard(props) {

  return <div className="planet">

      <h1>{props.name[props.id]}</h1>


  </div>
}

export default FavouriteCard;

