import React, { useState } from "react";

export default function HistoryWorld() {
  const [activeGame, setActiveGame] = useState("Time Traveler's Journal");
  const [points, setPoints] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Poppins, sans-serif", background: "#fefcf7", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "36px", color: "#6a11cb" }}>History World 🏛️</h1>
      <p style={{ textAlign: "center" }}>Choose a historical adventure!</p>

      {/* Game Selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        {["Time Traveler's Journal", "Dynasty Designer", "Historical Heists"].map(game => (
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
              transition: "0.3s"
            }}
          >
            {game}
          </button>
        ))}
      </div>

      {/* Render Selected Game */}
      {activeGame === "Time Traveler's Journal" && <TimeTravelerJournal setPoints={setPoints} points={points} />}
      {activeGame === "Dynasty Designer" && <DynastyDesigner setPoints={setPoints} points={points} />}
      {activeGame === "Historical Heists" && <HistoricalHeists setPoints={setPoints} points={points} />}
    </div>
  );
}

/* ---------------- Time Traveler's Journal ---------------- */
function TimeTravelerJournal({ setPoints, points }) {
  const [eraIndex, setEraIndex] = useState(0);

  const eras = [
    { name: "Ancient Egypt", clue: "A golden Ankh is missing ⚱️" },
    { name: "Medieval Europe", clue: "A lost crown has vanished 👑" },
    { name: "Mughal India", clue: "The emperor’s sword is stolen ⚔️" },
    { name: "World War II", clue: "Secret documents must be recovered 📜" },
  ];

  const handleExplore = () => {
    setPoints(points + 10);
    alert(`You explored ${eras[eraIndex].name} - Quest: ${eras[eraIndex].clue}`);
  };

  const nextEra = () => setEraIndex((eraIndex + 1) % eras.length);

  return (
    <div style={{ padding: "20px", background: "#f0f8ff", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#2a2a72" }}>🕰️ Time Traveler's Journal</h2>
      <p style={{ textAlign: "center" }}>Travel through history to recover lost objects!</p>

      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <p><strong>Current Era:</strong> {eras[eraIndex].name}</p>
        <p><em>{eras[eraIndex].clue}</em></p>
        <button onClick={handleExplore} style={animatedButtonStyle}>Explore Era 🔍</button>
        <button onClick={nextEra} style={{ ...animatedButtonStyle, background: "#a84300" }}>Next Era ➡️</button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Dynasty Designer ---------------- */
function DynastyDesigner({ setPoints, points }) {
  const [cityLevel, setCityLevel] = useState(1);

  const buildCity = () => {
    setPoints(points + cityLevel * 5);
    setCityLevel(cityLevel + 1);
  };

  return (
    <div style={{ padding: "20px", background: "#fffaf0", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#6a1b9a" }}>🏰 Dynasty Designer</h2>
      <p style={{ textAlign: "center" }}>Build and manage your historical empire.</p>

      <div style={{ textAlign: "center" }}>
        <p>City Level: {cityLevel}</p>
        <button onClick={buildCity} style={animatedButtonStyle}>Build City 🏗️</button>
      </div>

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        {/* New Cool Dynasty-Themed Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991089.png"
          alt="Dynasty Empire"
          style={{ width: "150px", animation: "pulse 2s infinite" }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Historical Heists ---------------- */
function HistoricalHeists({ setPoints, points }) {
  const [stage, setStage] = useState(0);

  const puzzles = [
    { clue: "Find the missing manuscript from the Renaissance library 📜", answer: "manuscript" },
    { clue: "Recover the stolen diamond from Victorian England 💎", answer: "diamond" },
    { clue: "Solve the cipher in Cold War documents 🔐", answer: "cipher" }
  ];

  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (input.toLowerCase() === puzzles[stage].answer) {
      setFeedback("✅ Correct! Mystery solved.");
      setPoints(points + 20);
      setStage(stage + 1 < puzzles.length ? stage + 1 : stage);
    } else {
      setFeedback("❌ Wrong! Try again.");
    }
    setInput("");
  };

  return (
    <div style={{ padding: "20px", background: "#f5f5dc", borderRadius: "15px", animation: "fadeIn 1s ease" }}>
      <h2 style={{ textAlign: "center", color: "#c2185b" }}>🕵️ Historical Heists</h2>
      <p style={{ textAlign: "center" }}>Solve clues to uncover historical mysteries.</p>

      <div style={{ textAlign: "center" }}>
        <p>{puzzles[stage].clue}</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button onClick={checkAnswer} style={animatedButtonStyle}>Submit Answer</button>
        {feedback && <p style={{ textAlign: "center" }}>{feedback}</p>}
      </div>
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
  animation: "buttonPulse 1.5s infinite"
};
