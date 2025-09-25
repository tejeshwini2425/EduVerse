import React, { useState } from "react";

// Bunny helper component for History World
function BunnyHelper({ onReward }) {
  const bunnyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  };

  const imgStyle = {
    width: "60px",
    animation: "bounce 2s infinite",
  };

  const buttonStyle = {
    background: "#9b59b6",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    marginTop: "5px",
    cursor: "pointer",
  };

  return (
    <div style={bunnyStyle}>
      <img src="/assets/little-bunny.png" alt="Little Bunny" style={imgStyle} />
      <button style={buttonStyle} onClick={onReward}>🐇 Reward Me!</button>
    </div>
  );
}

export default function HistoryWorld() {
  const eras = [
    { name: "Ancient Era", description: "Rise of civilizations, pyramids, early writing." },
    { name: "Medieval Era", description: "Castles, knights, and feudal systems." },
    { name: "Modern Era", description: "Industrial Revolution, democracy, technology." }
  ];
  const [selectedEra, setSelectedEra] = useState(null);
  const [points, setPoints] = useState(0);

  const handleSelectEra = (era) => {
    setSelectedEra(era);
    setPoints(points + 10); // reward points for exploring
  };

  const giveReward = () => {
    setPoints(points + 5);
  };

  const containerStyle = {
    background: "linear-gradient(135deg, #f4e3ff, #e9d4ff)",
    padding: "2rem",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const headingStyle = {
    color: "#7d5ba6",
    fontWeight: "bold",
  };

  const eraButtonStyle = {
    background: "#a97bd6",
    border: "none",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  };

  const eraButtonHover = {
    transform: "scale(1.05)",
  };

  const eraDescriptionStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "1rem",
    marginTop: "1rem",
    borderRadius: "8px",
    fontStyle: "italic",
  };

  const pointsStyle = {
    marginTop: "1rem",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#7d5ba6",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>History World 📜</h2>
      <p style={{ fontStyle: "italic" }}>
        Explore history with your little bunny friend! 🐇
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {eras.map((era, index) => (
          <button
            key={index}
            style={eraButtonStyle}
            onClick={() => handleSelectEra(era)}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {era.name}
          </button>
        ))}
      </div>

      {selectedEra && (
        <div style={eraDescriptionStyle}>
          <h3>{selectedEra.name}</h3>
          <p>{selectedEra.description}</p>
        </div>
      )}

      <BunnyHelper onReward={giveReward} />

      <div style={pointsStyle}>🏆 Points: {points}</div>

      {/* Inline animation keyframes */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
}
