import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import PlanetCard from "./PlanetCard";

function Planet( props ) {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://assignment-machstatz.herokuapp.com/planet"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  //console.log(data);

  return (
    <div>
      {data.map((planet) => {
        return <PlanetCard name={planet.name} isFavourite={planet.isFavourite} onFavourite={props.onFavourite} key={planet.id} id={planet.id}  />;
      })}
    </div>
  );
}

export default Planet;
