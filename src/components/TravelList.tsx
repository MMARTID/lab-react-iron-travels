import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList(){

 const main = {
  display: 'flex',
 }
 const renderList = {
    flexDirection: "column",
    alignItems: "center", 
    minHeight: "100vh", 
    padding: "20px",
 }as React.CSSProperties
 const singleCard = {
        display: "flex",
        alignItems: "center",
        background: "lightblue",
        border: "1px solid transparent",
        width: "95%", 
        margin: "10px 0", 
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
 }as React.CSSProperties
 const info = {
  flex: 1, 
  display: "flex",
  marginBottom: "auto",
  position: "revert",
  flexDirection: "column", 
  justifyContent: "flex-start", 
  textAlign: "left", 
 } as React.CSSProperties
 const imageStyle = {
  maxWidth: "450px",
  height: "450px",
  objectFit: "cover", 
  marginRight: "20px",
  marginLeft: "10px",
  borderRadius: "8px", 
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

const [travelList, setTravelList] = useState(travelPlansData);

 return (
 <div style={main}>
  <div style={renderList}>
    
  {travelList.map((plan, index) => (
     <div key={index} style={singleCard}>
       <img src = {plan.image} style={imageStyle}/>
     <div style={info}>
      <h2>{plan.destination} ({plan.days} Days)</h2>
         <p>{plan.description}</p>
         <p> <strong>Price:</strong>{plan.totalCost}</p>

     <div style={{display: 'flex', justifyContent: 'space-between',  minWidth: '310px',width: '60%', textAlign: 'center'}}>
      {plan.totalCost > 350 ? <span style={premium}>Premium</span> : <span style={deal}>Great Deal</span>}
      {plan.allInclusive ? <span style={premium}>All Inclusive</span> : null}

      
     </div>
<button></button>
      <button></button>
       </div>
     </div>
     )  
   )}
  </div>
  {/* COMPONENTE*/}
  </div>
 )
}

export default TravelList