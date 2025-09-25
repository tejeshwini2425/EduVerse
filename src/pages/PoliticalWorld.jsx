import React, { useState, useEffect } from "react";

// Bunny helper animation
function BunnyHelper({ onReward }) {
  const bunnyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
    animation: "float 3s ease-in-out infinite",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #b57edc, #9b59b6)",
    border: "none",
    color: "white",
    padding: "6px 12px",
    borderRadius: "20px",
    marginTop: "8px",
    cursor: "pointer",
    boxShadow: "0 0 8px rgba(155, 89, 182, 0.6)",
  };

  return (
    <div style={bunnyStyle}>
      <button style={buttonStyle} onClick={onReward}>
        🐇 Reward Me!
      </button>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default function MathWorld() {
  const [activeGame, setActiveGame] = useState("Math Quest");

  return (
    <div style={{ padding: "40px", fontFamily: "Poppins, sans-serif", background: "#f5f7fa", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <h1 style={{ textAlign: "center", fontSize: "36px", color: "#6a11cb" }}>Math World 🎯</h1>
      <p style={{ textAlign: "center" }}>
        Choose a game to sharpen your math skills in fun ways!
      </p>

      {/* Game Selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        {["Math Quest", "Factor Flow", "Equation Escape Room"].map(game => (
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
      {activeGame === "Math Quest" && <MathQuest />}
      {activeGame === "Factor Flow" && <FactorFlow />}
      {activeGame === "Equation Escape Room" && <EquationEscapeRoom />}
    </div>
  );
}

/* ---------------- Math Quest ---------------- */
function MathQuest() {
  const [question, setQuestion] = useState("5 + 7 = ?");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [level, setLevel] = useState("Easy");
  const [points, setPoints] = useState(0);

  const questions = {
    Easy: "5 + 7 = ?",
    Medium: "12 × 3 = ?",
    Hard: "144 ÷ 12 = ?",
  };

  const answers = {
    Easy: "12",
    Medium: "36",
    Hard: "12",
  };

  const checkAnswer = () => {
    if (answer.trim() === answers[level]) {
      setFeedback("✅ Correct! You gained experience!");
      setPoints(points + 10);
    } else {
      setFeedback("❌ Try again, brave adventurer!");
    }
    setAnswer("");
  };

  const changeLevel = (lvl) => {
    setLevel(lvl);
    setQuestion(questions[lvl]);
    setFeedback("");
  };

  return (
    <div style={{ background: "#f0f0ff", padding: "20px", borderRadius: "15px", animation: "fadeIn 1.2s ease" }}>
      <h2 style={{ textAlign: "center", color: "#2a2a72" }}>⚔️ Math Quest RPG</h2>
      <p style={{ textAlign: "center" }}>Solve math puzzles to battle monsters!</p>

      <div style={{ textAlign: "center", margin: "10px" }}>
        <label>Difficulty: </label>
        <select onChange={(e) => changeLevel(e.target.value)} value={level}>
          <option value="Easy">Easy 🌱</option>
          <option value="Medium">Medium 🌿</option>
          <option value="Hard">Hard 🌳</option>
        </select>
      </div>

      <p style={{ fontWeight: "bold", textAlign: "center" }}>{question}</p>
      <input value={answer} onChange={(e) => setAnswer(e.target.value)} style={{ padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }} />
      <button style={{ marginLeft: "10px", padding: "6px 12px", borderRadius: "8px", background: "#6a11cb", color: "white" }} onClick={checkAnswer}>Submit</button>

      {feedback && <p style={{ textAlign: "center", marginTop: "10px" }}>{feedback}</p>}
      <div style={{ textAlign: "center", fontWeight: "bold", color: "#6a11cb", marginTop: "10px" }}>Points: {points}</div>
    </div>
  );
}

/* ---------------- Factor Flow ---------------- */
function FactorFlow() {
  const [grid, setGrid] = useState([
    [2, 4, 6],
    [3, 9, 12],
    [5, 10, 15]
  ]);
  const [connections, setConnections] = useState([]);

  const handleCellClick = (row, col) => {
    setConnections([...connections, { row, col }]);
  };

  return (
    <div style={{ background: "#e0fff0", padding: "20px", borderRadius: "15px" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>🔗 Factor Flow</h2>
      <p style={{ textAlign: "center" }}>Connect numbers to their factors!</p>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${grid[0].length}, 80px)`, gap: "10px", justifyContent: "center" }}>
        {grid.map((row, rowIndex) =>
          row.map((num, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: "80px", height: "80px", background: connections.find(c => c.row === rowIndex && c.col === colIndex) ? "#ffeb3b" : "#a5d6a7",
                display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", cursor: "pointer",
                boxShadow: "0 0 8px rgba(0,0,0,0.2)"
              }}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {num}
            </div>
          ))
        )}
      </div>

      <p style={{ textAlign: "center", marginTop: "15px" }}>Connections Made: {connections.length}</p>
    </div>
  );
}

/* ---------------- Equation Escape Room ---------------- */
function EquationEscapeRoom() {
  const [stage, setStage] = useState(1);
  const puzzles = [
    { question: "x + 5 = 10", answer: "5" },
    { question: "2x = 14", answer: "7" },
    { question: "x/3 = 4", answer: "12" }
  ];
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (input === puzzles[stage - 1].answer) {
      setFeedback("✅ Puzzle solved! Proceed to next room.");
      if (stage < puzzles.length) setStage(stage + 1);
      else setFeedback("🎉 Escape Room Complete!");
    } else {
      setFeedback("❌ Wrong answer, try again.");
    }
    setInput("");
  };

  return (
    <div style={{ background: "#fff0f5", padding: "20px", borderRadius: "15px", animation: "fadeIn 1.2s ease" }}>
      <h2 style={{ textAlign: "center", color: "#c2185b" }}>🔒 Equation Escape Room</h2>
      <p style={{ textAlign: "center" }}>Solve equations to unlock the next room!</p>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>{puzzles[stage - 1].question}</p>
        <input value={input} onChange={(e) => setInput(e.target.value)} style={{ padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <button style={{ marginLeft: "10px", padding: "6px 12px", borderRadius: "8px", background: "#c2185b", color: "white" }} onClick={checkAnswer}>Submit</button>
      </div>
      {feedback && <p style={{ textAlign: "center", marginTop: "10px" }}>{feedback}</p>}
    </div>
  );
}
