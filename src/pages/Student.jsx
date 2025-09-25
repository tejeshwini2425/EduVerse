import React, { useState } from "react";
import WellnessBuddy from "../components/WellnessBuddy";
import AIChat from "../components/AIChat";
import ThreeScene from "../components/ThreeScene";
import StudyBuddy from "../components/StudyBuddy";

export default function Student() {
  const [points, setPoints] = useState(0);
  const [chatLogs, setChatLogs] = useState([]);

  const handleEvent = (e) => {
    if (e.type === "land") setPoints((p) => p + e.score);
  };

  const handleAIResponse = (reply) => {
    setChatLogs([...chatLogs, { role: "assistant", content: reply }]);
    if (reply.toLowerCase().includes("correct")) setPoints((p) => p + 5);
  };

  const containerStyle = {
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(135deg, #f0f4ff, #d9e8ff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#3a3a72",
    marginBottom: "15px",
    animation: "fadeIn 1s ease",
  };

  const pointsStyle = {
    background: "#6a11cb",
    color: "white",
    padding: "10px 20px",
    borderRadius: "25px",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    animation: "pulse 2s infinite",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    animation: "fadeInUp 0.8s ease",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#6a11cb",
    marginBottom: "10px",
  };

  const chatContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  };

  const footerStyle = {
    marginTop: "30px",
    color: "#7d5ba6",
    fontStyle: "italic",
    fontSize: "16px",
    animation: "fadeIn 1.2s ease",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>🌌 Gravity Lab - Student Dashboard</h2>

      {/* Points Badge */}
      <div style={pointsStyle}>🏆 Points: {points}</div>

      {/* Main Grid Layout */}
      <div style={gridStyle}>
        {/* Physics Simulation */}
        <div style={cardStyle} className="card">
          <h3 style={sectionTitleStyle}>🚀 Explore Physics</h3>
          <ThreeScene onEvent={handleEvent} />
        </div>

        {/* Chat Section */}
        <div style={cardStyle} className="card">
          <h3 style={sectionTitleStyle}>🤖 AI Chat Tutor</h3>
          <div style={chatContainerStyle}>
            <AIChat
              onReceiveAnswer={handleAIResponse}
              chatLogs={chatLogs}
              setChatLogs={setChatLogs}
            />
            <StudyBuddy onAnswer={handleAIResponse} />
          </div>
        </div>

        {/* Wellness Buddy */}
        <div style={cardStyle} className="card">
          <h3 style={sectionTitleStyle}>💡 Wellness Buddy</h3>
          <WellnessBuddy typingSpeed={points} quizScore={points} />
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        Keep exploring, keep learning! ✨
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}
