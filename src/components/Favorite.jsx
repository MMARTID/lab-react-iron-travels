import React from "react"
import DeleteButton from "./DeleteButton"

function Favorites({ favorites }) {
  const containerStyle = {
    flex: "1",
    padding: "20px",
    borderLeft: "2px solid #ccc",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  }

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  }

  const favoriteItemStyle = {
    marginBottom: "10px",
    padding: "10px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
            <h4 style={titleStyle}>{fav.destination}</h4>
            <p style={descriptionStyle}>{fav.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  )
}

export default Favorites