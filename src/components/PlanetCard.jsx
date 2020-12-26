import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';


function PlanetCard(props) {

    function Click (event) {

      props.onFavourite(props.id);
      event.target.style.color = '#cf352e';

      
    }
      
  

  //console.log(favPlanets);
  
  

return (
  
        <div className="planet">

          <h1>{props.name}</h1>
          <button type="submit" onClick = {Click} value={props.id} > <FavoriteIcon /></button>

        </div>
  );
}

export default PlanetCard;
