import React, { useState, useEffect } from "react";
import "./WellnessBuddy.css";

export default function WellnessBuddy({ typingSpeed, quizScore }) {
  const [stressLevel, setStressLevel] = useState("low");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    // Simple stress detection
    if (typingSpeed > 120 || quizScore < 50) {
      setStressLevel("high");
      setSuggestion("😌 Take a 1-min breathing break or play a mini game!");
    } else {
      setStressLevel("low");
      setSuggestion("");
    }
  }, [typingSpeed, quizScore]);

  return (
    <div className={`wellness-buddy ${stressLevel}`}>
      {stressLevel === "high" && (
        <div className="wellness-popup">
          <h4>Wellness Check 🌱</h4>
          <p>{suggestion}</p>
          <button onClick={() => alert("Breathing exercise started!")}>Start Breathing</button>
          <button onClick={() => alert("Launching mini-game!")}>Play Mini Game</button>
        </div>
      )}
    </div>
  );
}
