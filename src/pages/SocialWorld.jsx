import React, { useState } from "react";

// Bunny helper for Social World
function BunnyHelper({ onDebate }) {
  const bunnyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  };



  const buttonStyle = {
    background: "#9b59b6",
    border: "none",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    marginTop: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={bunnyStyle}>

      <button style={buttonStyle} onClick={onDebate}>🐇 Start Debate!</button>
    </div>
  );
}

export default function SocialWorld() {
  const games = [
    { title: "🌏 Culture Caravan", description: "Travel the world and learn about different cultures through interactive quests." },
    { title: "🏘️ Community Constructor", description: "Build and manage a virtual community addressing social issues." },
    { title: "💡 Empathy Engine", description: "Make choices in animated scenarios affecting characters’ well-being." }
  ];

  const [selectedGame, setSelectedGame] = useState(null);
  const [points, setPoints] = useState(0);

  const givePoints = (pts) => setPoints((prev) => prev + pts);

  const containerStyle = {
    background: "linear-gradient(135deg, #f4f4f8, #e9e9ff)",
    padding: "2rem",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const headingStyle = {
    color: "#3a3a72",
    fontWeight: "bold",
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "1rem",
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
    borderRadius: "12px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHeading = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#6a11cb",
    marginBottom: "10px",
  };

  const cardText = {
    fontSize: "16px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Social World 🌍</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        Explore society and culture with your bunny friend! 🐇
      </p>

      {/* Game Selector */}
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

      {/* Game Viewer */}
      {selectedGame && (
        <div style={{ marginTop: "20px" }}>
          {selectedGame === "🌏 Culture Caravan" && <CultureCaravan setPoints={givePoints} />}
          {selectedGame === "🏘️ Community Constructor" && <CommunityConstructor setPoints={givePoints} />}
          {selectedGame === "💡 Empathy Engine" && <EmpathyEngine setPoints={givePoints} />}
        </div>
      )}

      <BunnyHelper onDebate={() => givePoints(5)} />

      <div style={{ marginTop: "1rem", fontSize: "18px", fontWeight: "bold", color: "#3a3a72", textAlign: "center" }}>
        🏆 Points: {points}
      </div>

      <style>{`
        .game-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ===== GAME COMPONENTS ===== */

function CultureCaravan({ setPoints }) {
  const [location,] = useState("Japan");
  const [quest, setQuest] = useState("Learn a traditional greeting.");

  const handleQuestComplete = () => {
    setQuest("Discover a cultural dance.");
    setPoints(15);
  };

  return (
    <div style={{ animation: "fadeIn 1s ease" }}>
      <h3 style={{ textAlign: "center" }}>Culture Caravan 🌏</h3>
      <p style={{ textAlign: "center" }}>Location: {location}</p>
      <p style={{ textAlign: "center" }}>{quest}</p>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleQuestComplete}>Complete Quest 🎯</button>
      </div>
    </div>
  );
}

function CommunityConstructor({ setPoints }) {
  const [population, setPopulation] = useState(100);
  const [message, setMessage] = useState("Build your community.");

  const addHousing = () => {
    setPopulation(population + 20);
    setMessage("Housing increased!");
    setPoints(10);
  };

  const addSchool = () => {
    setPopulation(population + 10);
    setMessage("Education improved!");
    setPoints(10);
  };

  return (
    <div style={{ animation: "fadeIn 1s ease" }}>
      <h3 style={{ textAlign: "center" }}>Community Constructor 🏘️</h3>
      <p style={{ textAlign: "center" }}>{message}</p>
      <p style={{ textAlign: "center" }}>Population: {population}</p>
      <div style={{ textAlign: "center" }}>
        <button onClick={addHousing} style={{ margin: "5px" }}>Add Housing 🏠</button>
        <button onClick={addSchool} style={{ margin: "5px" }}>Add School 📚</button>
      </div>
    </div>
  );
}

function EmpathyEngine({ setPoints }) {
  const [scenario,] = useState("A friend is sad because they failed a test.");
  const [choice, setChoice] = useState(null);

  const makeChoice = (option) => {
    setChoice(option);
    setPoints(20);
  };

  return (
    <div style={{ animation: "fadeIn 1s ease" }}>
      <h3 style={{ textAlign: "center" }}>Empathy Engine 💡</h3>
      <p style={{ textAlign: "center" }}>{scenario}</p>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => makeChoice("Comfort them")}>Comfort them 🤗</button>
        <button onClick={() => makeChoice("Encourage them")}>Encourage them 💬</button>
      </div>
      {choice && <p style={{ textAlign: "center", color: "green" }}>You chose to: {choice}</p>}
    </div>
  );
}
