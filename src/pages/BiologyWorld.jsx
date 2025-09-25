// src/pages/BiologyWorld.jsx
import React, { useState, useEffect } from "react";

export default function BiologyWorld() {
  const [activeGame, setActiveGame] = useState("Cellular City");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", background: "#f5f7fa", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <h1 style={{ textAlign: "center", fontSize: "36px", color: "#6a11cb" }}>Biology World 🌱</h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#4b3c63" }}>
        Choose a game to explore the wonders of biology!
      </p>

      {/* Game Selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        {["Cellular City", "Eco-Evolution", "Anatomy Arcade"].map(game => (
          <button
            key={game}
            onClick={() => setActiveGame(game)}
            style={{
              padding: "10px 20px",
              background: activeGame === game ? "#6a11cb" : "#a97bd6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {game}
          </button>
        ))}
      </div>

      {/* Game Renderer */}
      {activeGame === "Cellular City" && <CellularCity />}
      {activeGame === "Eco-Evolution" && <EcoEvolution />}
      {activeGame === "Anatomy Arcade" && <AnatomyArcade />}

      {/* Microorganism Animations (background) */}
      <div className="microbe microbe1"></div>
      <div className="microbe microbe2"></div>
      <div className="microbe microbe3"></div>

      {/* Animation CSS */}
      <style>{`
        .microbe {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 15s infinite ease-in-out;
          z-index: 0;
        }
        .microbe1 {
          width: 60px; height: 60px;
          top: 20%; left: 10%;
          background: radial-gradient(circle, #6a11cb, #a97bd6);
          animation-delay: 0s;
        }
        .microbe2 {
          width: 50px; height: 50px;
          top: 50%; left: 70%;
          background: radial-gradient(circle, #00c9a7, #00917c);
          animation-delay: 5s;
        }
        .microbe3 {
          width: 70px; height: 70px;
          top: 70%; left: 30%;
          background: radial-gradient(circle, #f39c12, #d35400);
          animation-delay: 8s;
        }
        @keyframes float {
          0% { transform: translate(0,0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(15deg); }
          50% { transform: translate(-20px, 30px) rotate(-10deg); }
          75% { transform: translate(25px, 15px) rotate(5deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

/* --------------------------- Cellular City --------------------------- */
function CellularCity() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [atp, setAtp] = useState(100);
  const [glucose, setGlucose] = useState(50);
  const [organelles, setOrganelles] = useState([]);
  const [message, setMessage] = useState("Welcome, City Planner!");
  const [isGameLost, setIsGameLost] = useState(false);

  useEffect(() => {
    if (!isGameActive || isGameLost) return;

    const gameTick = setInterval(() => {
      setAtp(prev => Math.max(0, prev - 5));
      setGlucose(prev => Math.max(0, prev - 2));
      if (atp <= 0 || glucose <= 0) {
        setMessage("GAME OVER! Your cell died.");
        setIsGameLost(true);
      }
    }, 1000);

    const processOrganelles = setInterval(() => {
      organelles.forEach(organelle => {
        if (organelle === "mitochondria") setAtp(prev => prev + 20);
        if (organelle === "chloroplast") setGlucose(prev => prev + 10);
      });
    }, 5000);

    return () => {
      clearInterval(gameTick);
      clearInterval(processOrganelles);
    };
  }, [isGameActive, atp, glucose, organelles, isGameLost]);

  const placeOrganelle = (index, organelleType) => {
    if (!isGameActive || isGameLost) return;
    const newOrganelles = [...organelles];
    newOrganelles[index] = organelleType;
    setOrganelles(newOrganelles);
    setMessage(`${organelleType} placed!`);
  };

  const renderBoard = () => {
    const boardCells = [];
    for (let i = 0; i < 25; i++) {
      const organelle = organelles[i];
      let icon = "";
      if (organelle === "mitochondria") icon = "⚡";
      if (organelle === "chloroplast") icon = "☀️";

      boardCells.push(
        <div
          key={i}
          style={{
            width: "80px",
            height: "80px",
            background: "#e9f2ff",
            border: "1px solid #cceeff",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            cursor: isGameActive ? "pointer" : "default",
            position: "relative",
          }}
          onClick={() => {
            if (!organelle) {
              const types = ["mitochondria", "chloroplast"];
              const randomType = types[Math.floor(Math.random() * types.length)];
              placeOrganelle(i, randomType);
            }
          }}
        >
          {icon}
          {/* Glow animation for organelle */}
          {organelle && <div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "10px", boxShadow: "0 0 10px rgba(255,255,255,0.6)" }} />}
        </div>
      );
    }
    return boardCells;
  };

  return (
    <div style={{ background: "#f0f8ff", padding: "20px", borderRadius: "15px", position: "relative", zIndex: 1 }}>
      <h2 style={{ textAlign: "center", color: "#6a11cb" }}>Cellular City 🏙️</h2>
      <p style={{ textAlign: "center" }}>
        Build and manage a living cell! Click an empty space to place organelles.
      </p>

      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <span>⚡ ATP: {atp}</span>
        <span>☀️ Glucose: {glucose}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "5px" }}>
        {renderBoard()}
      </div>

      <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => {
            setIsGameActive(true);
            setIsGameLost(false);
            setAtp(100);
            setGlucose(50);
            setOrganelles([]);
            setMessage("The cell is alive! Place organelles.");
          }}
          style={{ padding: "10px 20px", background: "#6a11cb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          {isGameActive ? "Restart Game" : "Start Game"}
        </button>
      </div>
    </div>
  );
}

/* --------------------------- Eco Evolution --------------------------- */
function EcoEvolution() {
  const [species, setSpecies] = useState([
    { name: "Rabbit", count: 5, color: "#ff9999" },
    { name: "Fox", count: 2, color: "#ff6600" },
    { name: "Grass", count: 20, color: "#66ff66" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecies(species => species.map(sp => ({
        ...sp,
        count: Math.max(0, sp.count + (Math.random() > 0.5 ? 1 : -1)),
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "#e0ffe0", padding: "20px", borderRadius: "15px", position: "relative", zIndex: 1 }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>Eco Evolution 🌱</h2>
      <p style={{ textAlign: "center" }}>
        Watch species interact and evolve over time!
      </p>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {species.map((sp, idx) => (
          <div key={idx} style={{ textAlign: "center", animation: "bounce 2s infinite" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: sp.color, margin: "0 auto", animation: "floatMicrobe 4s ease-in-out infinite" }} />
            <p>{sp.name}</p>
            <p>{sp.count}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
        @keyframes floatMicrobe { 0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);} }
      `}</style>
    </div>
  );
}

/* --------------------------- Anatomy Arcade --------------------------- */
function AnatomyArcade() {
  const [score, setScore] = useState(0);

  const playMiniGame = () => {
    setScore(score + Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div style={{ background: "#ffe0e0", padding: "20px", borderRadius: "15px", position: "relative", zIndex: 1 }}>
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Anatomy Arcade 🧠</h2>
      <p style={{ textAlign: "center" }}>
        Play mini-games to explore human anatomy.
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={playMiniGame}
          style={{ padding: "10px 20px", background: "#c62828", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Play Mini Game 🎮
        </button>
      </div>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "1.2rem" }}>
        Score: {score}
      </p>
    </div>
  );
}
