import React, { useState } from "react";
import logo from "./assets/logo.png";
import TravelList from "./components/TravelList";
import Favorites from "./components/Favorite"
import "./App.css";

function App() {


  const containerStyle = {
    display: "flex",
    width: "100%",
    height: "100vh", 
  };

  const travelListStyle = {
    flex: 3, 
  };

  const favoritesStyle = {
    flex: 1, 
    borderLeft: "2px solid #ccc", 
  };
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (plan) => {
    if (!favorites.find((fav) => fav.destination === plan.destination)) {
      setFavorites([...favorites, plan]);
    }
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div style={containerStyle}>
      <div style={travelListStyle}>
        <TravelList addToFavorites={addToFavorites} /> 
        </div>
        <div style={favoritesStyle}>
        <Favorites favorites={favorites} />
      </div>
     </div>
    </>
  );
}

export default App;
