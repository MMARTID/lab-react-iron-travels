import React from "react"
import DeleteButton from "./DeleteButton"

function Favorites({ favorites }) {
  const containerStyle = {
    flex: "1",
    padding: "20px",
    borderLeft: "2px solid #ccc",
    backgroundColor: "#f9f9f9",
    minHeight: "300vh",
    width: "100%"
  }

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  }

  const favoriteItemStyle = {
    display: "flex",
   //flexDirection: "column",
   // alignItems: "flex-start",
   // justifyContent: "center",
    background: "lightblue", 
    border: "1px solid transparent",
    width: "20%",
    minWidth: "850px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "10px",
    padding: "10px",  
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  } 
  const imageStyle = {
    maxWidth: "150px", 
    height: "150px",
    objectFit: "cover",
    marginRight: "20px",
    marginLeft: "10px",
    borderRadius: "8px",
    position: "relative",
  }
  const infoStyle = {
    flex: 1,
    marginBottom: "auto",
    position: "revert",
    justifyContent: "flex-start",
    textAlign: "left",
    paddingInline: "10px"
  }

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  }

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
  }
  
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((fav, index) => (
          <div key={index} style={favoriteItemStyle}>
             <div style={imageStyle}>
              <img src={fav.image} alt={fav.destination} style={imageStyle} />
            </div>
            <div style={infoStyle}>
            <h4 style={titleStyle}>{fav.destination}</h4>
            <p style={descriptionStyle}>{fav.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  )
}

export default Favorites