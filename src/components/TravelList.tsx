import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import DeleteButton from "./DeleteButton"

function TravelList({ addToFavorites }){
   const [travelList, setTravelList] = useState(travelPlansData);


 const main = {
  display: 'flex',
 }
 const renderList = {
    flexDirection: "column",
    alignItems: "center", 
    minHeight: "100vh", 
    padding: "20px",
    flex: '1',
 }as React.CSSProperties
 const singleCard = {
  display: "flex",
  alignItems: "center",
  background: "lightblue",
  border: "1px solid transparent",
  width: "95%", 
  minWidth: '850px',
  margin: "10px 0", 
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
 }as React.CSSProperties
 const info = {
  flex: 1, 
  marginBottom: "auto",
  position: "revert",
  justifyContent: "flex-start", 
  textAlign: "left", 
  paddingInline: '10px'
 } as React.CSSProperties
 const imageStyle = {
  maxWidth: "450px",
  height: "450px",
  objectFit: "cover", 
  marginRight: "20px",
  marginLeft: "10px",
  borderRadius: "8px", 
  position: "relative"
 } as React.CSSProperties
 const premium = {
  fontSize: '2.1',
  padding: '10px',
  backgroundColor: 'blue',
  fontWeight: 'strong',
  borderRadius: '10px',
  width: '40%',
  color: 'white'
 } as React.CSSProperties
 const deal = {
  padding: '10px',
  backgroundColor: 'green',
  fontWeight: 'strong',
  borderRadius: '10px',
  width: '40%'
 }as React.CSSProperties
 const favoriteButtonStyle = {
  position: 'absolute',
  top: "10px",
  right: "10px",        // Ajusta la distancia desde el borde derecho
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
}as React.CSSProperties
const deleteButton = { 
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "white",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
}as React.CSSProperties
const buttonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "white",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
} as React.CSSProperties;



const handleDelete = (planId: number) => {
  setTravelList((prevList) => prevList.filter((plan) => plan.id !== planId));
}
const handleAddToFavorites = (plan) => {
  addToFavorites(plan);
};

 return (
 <div style={main}>
  <div style={renderList}>
    
  {travelList.map((plan, index) => (
     <div key={index} style={singleCard}>
      <div style={imageStyle}>
        <img src = {plan.image} style={imageStyle}/> 
        <button 
          style={{ ...buttonStyle, backgroundColor: "#007bff" }} 
          onClick={() => handleAddToFavorites(plan)}> 
          ❤️ 
        </button>
      </div>

      <div style={info}>
        <div style={{display: 'flex',position: 'relative',justifyContent: ''}}>
        <DeleteButton onDelete={() => handleDelete(plan.id)} /> 
       <h2>
           {plan.destination} ({plan.days} Days)
       </h2>
       
        </div>
         <p> 
           {plan.description}
         </p>
         <p>
            <strong>Price:</strong>{plan.totalCost}
         </p>
        <div style={{display: 'flex', justifyContent: 'space-between',  minWidth: '310px',width: '70%', textAlign: 'center'}}>

          {plan.totalCost > 350 ? <span style={premium}>Premium</span> : <span style={deal}>Great Deal</span>}
          {plan.allInclusive ? <span style={premium}>All Inclusive</span> : null} 
        </div>       
      </div>
     </div>

     )  
   )}

  </div>
  </div>
 )
}

export default TravelList