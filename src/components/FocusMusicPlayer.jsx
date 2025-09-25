import React, { useState, useEffect } from "react";

export default function FocusMusicPlayer({ studyPattern }) {
  const [mode, setMode] = useState("Alpha");
  const [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    if (studyPattern === "focused") setMode("Beta");
    else if (studyPattern === "creative") setMode("Theta");
    else setMode("Alpha");

    // Select music for mode
    const musicLibrary = {
      Alpha: "https://www.example.com/alpha-wave.mp3",
      Beta: "https://www.example.com/beta-wave.mp3",
      Theta: "https://www.example.com/theta-wave.mp3"
    };
    setMusicUrl(musicLibrary[mode]);
  }, [studyPattern, mode]);

  const handleModeChange = (e) => setMode(e.target.value);

  return (
    <div style={{ padding: "1rem", background: "#f3f3f3", borderRadius: "10px", marginTop: "1rem" }}>
      <h4>🎶 Focus Music — {mode} Waves</h4>
      <select value={mode} onChange={handleModeChange}>
        <option value="Alpha">Alpha Waves (Focus)</option>
        <option value="Beta">Beta Waves (Alertness)</option>
        <option value="Theta">Theta Waves (Creativity)</option>
      </select>
      {musicUrl && (
        <audio controls autoPlay loop style={{ width: "100%", marginTop: "0.5rem" }}>
          <source src={musicUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
