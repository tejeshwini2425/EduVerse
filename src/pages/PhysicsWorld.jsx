import React, { useState } from "react";
import ThreeScene from "../components/ThreeScene";

export default function PhysicsWorld() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [gravity, setGravity] = useState(-9.8);
  const [kineticProgress, setKineticProgress] = useState(0);
  const [circuitComponents, setCircuitComponents] = useState([]);
  const [gravityLevel, setGravityLevel] = useState("Earth");

  const games = [
    {
      title: "🏰 Kinetic Kingdom",
      description:
        "Solve motion puzzles using levers, pulleys, and ramps in a Rube Goldberg world.",
    },
    {
      title: "⚡ Circuit Crafter",
      description:
        "Build and test your own electrical circuits with glowing electrons.",
    },
    {
      title: "🌌 Gravity Gauntlet",
      description:
        "Navigate challenging levels by manipulating gravity to learn physics concepts.",
    },
  ];

  const containerStyle = {
    background: "linear-gradient(135deg, #e8d4f1, #f3e8ff)",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    color: "#6a11cb",
    fontWeight: "bold",
    fontSize: "32px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHeading = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#6a11cb",
    marginBottom: "10px",
  };

  const cardText = {
    fontSize: "16px",
    color: "#555",
  };

  const buttonStyle = {
    background: "#a97bd6",
    border: "none",
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "0.5rem",
  };

  const selectorStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Physics World ⚛️</h2>

      {/* Game Selection Cards */}
      <div style={cardContainerStyle}>
        {games.map((game, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => setSelectedGame(game.title)}
            className="game-card"
          >
            <h3 style={cardHeading}>{game.title}</h3>
            <p style={cardText}>{game.description}</p>
          </div>
        ))}
      </div>

      {/* Gravity Selector (only for Gravity Gauntlet) */}
      {selectedGame === "🌌 Gravity Gauntlet" && (
        <>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Choose gravity level:
          </p>
          <div style={selectorStyle}>
            <button
              style={buttonStyle}
              onClick={() => {
                setGravity(-9.8);
                setGravityLevel("Earth");
              }}
            >
              🌍 Earth
            </button>
            <button
              style={buttonStyle}
              onClick={() => {
                setGravity(-3.7);
                setGravityLevel("Mars");
              }}
            >
              🔴 Mars
            </button>
            <button
              style={buttonStyle}
              onClick={() => {
                setGravity(-1.6);
                setGravityLevel("Moon");
              }}
            >
              🌙 Moon
            </button>
          </div>
        </>
      )}

      {/* Game Viewer */}
      {selectedGame && (
        <div style={{ marginTop: "20px" }}>
          {selectedGame === "🏰 Kinetic Kingdom" && (
            <KineticKingdom progress={kineticProgress} setProgress={setKineticProgress} />
          )}
          {selectedGame === "⚡ Circuit Crafter" && (
            <CircuitCrafter components={circuitComponents} setComponents={setCircuitComponents} />
          )}
          {selectedGame === "🌌 Gravity Gauntlet" && (
            <GravityGauntlet gravity={gravity} level={gravityLevel} />
          )}
        </div>
      )}

      {/* Card hover animation */}
      <style>
        {`
          .game-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}

/* ---------------- Kinetic Kingdom ---------------- */
function KineticKingdom({ progress, setProgress }) {
  return (
    <div style={{ background: "#f0f8ff", padding: "20px", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#2a2a72" }}>🏰 Kinetic Kingdom</h2>
      <p style={{ textAlign: "center" }}>
        Build a Rube Goldberg contraption to move objects!
      </p>
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "20px", fontSize: "24px" }}>
          Progress: {progress}%
        </div>
        <button
          style={animatedButtonStyle}
          onClick={() => setProgress(Math.min(progress + 10, 100))}
        >
          Add Lever / Pulley 🔧
        </button>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3560/3560412.png"
          alt="Rube Goldberg"
          style={{ width: "200px", animation: "bounce 2s infinite" }}
        />
      </div>
    </div>
  );
}

/* ---------------- Circuit Crafter ---------------- */
function CircuitCrafter({ components, setComponents }) {
  const addComponent = () => setComponents([...components, "resistor"]);

  return (
    <div style={{ background: "#fffaf0", padding: "20px", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#6a1b9a" }}>⚡ Circuit Crafter</h2>
      <p style={{ textAlign: "center" }}>
        Build your own circuit and watch electrons flow!
      </p>
      <div style={{ textAlign: "center" }}>
        <button style={animatedButtonStyle} onClick={addComponent}>
          Add Resistor 🔌
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {components.map((c, index) => (
          <div key={index} style={{ margin: "0 5px", padding: "10px", background: "#d0f0fd", borderRadius: "5px" }}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Gravity Gauntlet ---------------- */
function GravityGauntlet({ gravity, level }) {
  return (
    <div style={{ background: "#f5f5dc", padding: "20px", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#c2185b" }}>🌌 Gravity Gauntlet</h2>
      <p style={{ textAlign: "center" }}>
        Gravity: {level} ({gravity} m/s²)
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/306/306473.png"
          alt="Gravity"
          style={{ width: "150px", animation: "gravityPulse 2s infinite" }}
        />
      </div>
      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Use your gravity powers to solve puzzles.
      </p>
      <style>{`
        @keyframes gravityPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Button Style ---------------- */
const animatedButtonStyle = {
  padding: "10px 20px",
  margin: "5px",
  background: "linear-gradient(135deg, #b57edc, #9b59b6)",
  border: "none",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  animation: "buttonPulse 1.5s infinite",
};
