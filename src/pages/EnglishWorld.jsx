import React, { useState } from "react";

// Bunny helper component
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

      <button style={buttonStyle} onClick={onReward}>
        🐇 Reward Me!
      </button>
    </div>
  );
}

export default function EnglishWorld() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [points, setPoints] = useState(0);

  const games = [
    { title: "📜 Grammar Guardians", description: "Identify and correct grammar errors to defeat grammar gremlins!" },
    { title: "🗺️ Vocab Voyage", description: "Collect prefixes, suffixes, and roots to build words and unlock storybook worlds." },
    { title: "✒️ Story Scribe", description: "Collaboratively create a story where your choices shape the ending." },
  ];

  const containerStyle = {
    background: "linear-gradient(135deg, #f4e3ff, #e9d4ff)",
    padding: "2rem",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const headingStyle = {
    color: "#7d5ba6",
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
    width: "280px",
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

  const giveReward = () => setPoints(points + 10);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>English World ✍️</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        Learn English while playing fun games! 📚
      </p>

      {/* Game Selection */}
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
          {selectedGame === "📜 Grammar Guardians" && <GrammarGuardians setPoints={setPoints} />}
          {selectedGame === "🗺️ Vocab Voyage" && <VocabVoyage setPoints={setPoints} />}
          {selectedGame === "✒️ Story Scribe" && <StoryScribe setPoints={setPoints} />}
        </div>
      )}

      <BunnyHelper onReward={giveReward} />

      <div
        style={{
          marginTop: "1rem",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#7d5ba6",
          textAlign: "center",
        }}
      >
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
        @keyframes scrollAnim {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ====== GAME COMPONENTS ====== */

function GrammarGuardians({ setPoints }) {
  const [sentence, setSentence] = useState("She go to school yesterday.");
  const [feedback, setFeedback] = useState("");

  const buttonStyle = {
    background: "#a97bd6",
    border: "none",
    color: "white",
    padding: "0.6rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const checkGrammar = () => {
    setFeedback("✅ Correct! Grammar gremlin defeated!");
    setPoints((p) => p + 5);
  };

  return (
    <div style={{ animation: "scrollAnim 1s ease" }}>
      <h3 style={{ textAlign: "center", color: "#2a2a72" }}>Grammar Guardians 🏛️</h3>
      <p style={{ textAlign: "center" }}>
        Correct the sentence to defeat the grammar gremlin:
      </p>
      <p style={{ fontStyle: "italic", textAlign: "center", color: "#555" }}>
        {sentence}
      </p>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <input
          placeholder="Correct sentence..."
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "70%" }}
        />
        <button style={{ ...buttonStyle, marginLeft: "10px" }} onClick={checkGrammar}>
          Check
        </button>
      </div>
      {feedback && (
        <p style={{ textAlign: "center", marginTop: "10px", color: "green" }}>
          {feedback}
        </p>
      )}
    </div>
  );
}

function VocabVoyage({ setPoints }) {
  const [words, setWords] = useState(["bio", "logy"]);
  const [message, setMessage] = useState("");

  const addWordPart = () => {
    setWords([...words, "graphy"]);
    setMessage("🗺️ New word discovered: biologygraphy!");
    setPoints((p) => p + 5);
  };

  const buttonStyle = {
    background: "#a97bd6",
    border: "none",
    color: "white",
    padding: "0.6rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={{ animation: "scrollAnim 1s ease" }}>
      <h3 style={{ textAlign: "center", color: "#6a1b9a" }}>Vocab Voyage 🗺️</h3>
      <p style={{ textAlign: "center" }}>
        Build words to unlock the storybook map.
      </p>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {words.map((w, i) => (
          <span key={i} style={{ margin: "0 5px", fontWeight: "bold" }}>
            {w}
          </span>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button style={buttonStyle} onClick={addWordPart}>
          Add Word Part ✨
        </button>
      </div>
      {message && (
        <p style={{ textAlign: "center", marginTop: "10px", color: "#6a1b9a" }}>
          {message}
        </p>
      )}
    </div>
  );
}

function StoryScribe({ setPoints }) {
  const [story, setStory] = useState("Once upon a time...");
  const [input, setInput] = useState("");

  const addLine = () => {
    if (input.trim()) {
      setStory(story + " " + input);
      setInput("");
      setPoints((p) => p + 5);
    }
  };

  const buttonStyle = {
    background: "#a97bd6",
    border: "none",
    color: "white",
    padding: "0.6rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={{ animation: "scrollAnim 1s ease" }}>
      <h3 style={{ textAlign: "center", color: "#c2185b" }}>Story Scribe ✒️</h3>
      <p style={{ textAlign: "center" }}>
        Contribute to the story and shape the ending.
      </p>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your line..."
          style={{ padding: "10px", borderRadius: "5px", width: "80%", height: "60px" }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button style={buttonStyle} onClick={addLine}>
          Add Line 📜
        </button>
      </div>
      <div style={{ marginTop: "20px", padding: "10px", background: "#fff8e1", borderRadius: "10px", animation: "fadeIn 1s ease" }}>
        <p style={{ fontStyle: "italic" }}>{story}</p>
      </div>
    </div>
  );
}
