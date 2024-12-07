import React from "react";
import DeleteButton from "./DeleteButton";

function TravelPlanCard({ plan, handleAddToFavorites, handleDelete }) {
    const cardStyle = {
      display: "flex",
      alignItems: "center",
      background: "lightblue",
      border: "1px solid transparent",
      width: "95%",
      minWidth: "850px",
      margin: "10px 0",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    } 
  
    const imageStyle = {
      maxWidth: "450px",
      height: "450px",
      objectFit: "cover",
      marginRight: "20px",
      marginLeft: "10px",
      borderRadius: "8px",
      position: "relative"
    }
  
    const infoStyle = {
      flex: 1,
      marginBottom: "auto",
      position: "revert",
      justifyContent: "flex-start",
      textAlign: "left",
      paddingInline: "10px"
    } 
  
    const premium = {
      fontSize: "2.1",
      padding: "10px",
      backgroundColor: "blue",
      fontWeight: "strong",
      borderRadius: "10px",
      width: "40%",
      color: "white"
    }
  
    const deal = {
      padding: "10px",
      backgroundColor: "green",
      fontWeight: "strong",
      borderRadius: "10px",
      width: "40%",
    }
  
    return (
      <div style={cardStyle}>
        <div style={imageStyle}>
          <img src={plan.image} style={imageStyle} />
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
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
            }}
            onClick={() => handleAddToFavorites(plan)}
          >
            ❤️
          </button>
        </div>
  
        <div style={infoStyle}>
          <div style={{ display: "flex", position: "relative" }}>
            <DeleteButton onDelete={() => handleDelete(plan.id)} />
            <h2>
              {plan.destination} ({plan.days} Days)
            </h2>
          </div>
          <p>{plan.description}</p>
          <p>
            <strong>Price:</strong> {plan.totalCost}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "310px",
              width: "70%",
              textAlign: "center"
            }}
          >
            {plan.totalCost > 350 ? (
              <span style={premium}>Premium</span>
            ) : (
              <span style={deal}>Great Deal</span>
            )}
            {plan.allInclusive && <span style={premium}>All Inclusive</span>}
          </div>
        </div>
      </div>
    )
  }
  
  export default TravelPlanCard