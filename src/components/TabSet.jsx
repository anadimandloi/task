import React, { useState } from "react";
import Planet from "./Planet";
import { Tabs, Tab, Content } from "./tab";
import FavouriteCard from "./FavouriteCard"

function TabSet(props) {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className="App">


      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          All Planets
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Favourites
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <Planet onFavourite={props.onFavourite} />
        </Content>
        <Content active={active === 1}>
        {props.favouritePlanets.map((planet,index) => {
        return <FavouriteCard  id={index} name={props.favouritePlanets}/>;
      })}
          
        </Content>
      </>
      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </div>
  );
}


export default TabSet;