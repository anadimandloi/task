import React, { useState } from "react";
import "./styles.css";
import TabSet from "./components/TabSet";

export default function App() {

  const [favouritePlanets, setFavouritePlanets] = useState([]);

  function onFavourite(newPlanet) {

    setFavouritePlanets(prevPlanets => {
            return [...prevPlanets, newPlanet]
    })

    console.log(favouritePlanets);
    

  }

  return (
    <div className="App">
      <TabSet onFavourite={onFavourite} favouritePlanets={favouritePlanets} />

    </div>
  );
}
