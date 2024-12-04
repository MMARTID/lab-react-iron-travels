import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList(){
 const [travelList, setTravelList] = useState(travelPlansData);
 return (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    background: "blue",
    minHeight: "100vh", 
    padding: "20px",
  }}>
  {travelList.map((plan, index) => (
     <div key={index} style={{
        display: "flex",
        alignItems: "center",
        background: "lightblue",
        border: "1px solid #000",
        width: "60%", 
        margin: "10px 0", 
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}>
       <img src = {plan.image} style={{
              width: "550px",
              height: "550px",
              objectFit: "cover", 
              marginRight: "20px",
              borderRadius: "8px", 
            }}/>
       <div style={{
            flex: 1, 
            display: "flex",
            marginTop: "-300px auto",
            position: "revert",
            flexDirection: "column", 
            justifyContent: "flex-start", 
            textAlign: "left", 
        }}>
            <h2>{plan.destination}</h2>
            <p>{plan.description}</p>
            <p>
              <strong>Price:</strong> {plan.totalCost}
            </p>
       </div>
     </div>)  
   )}
  </div>
 )
}

export default TravelList