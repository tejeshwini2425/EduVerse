import React, { useState } from "react";

export default function AIChat({ onReceiveAnswer, chatLogs, setChatLogs }) {
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input) return;
    const userMsg = { role: "user", content: input };
    setChatLogs([...chatLogs, userMsg]);
    setInput("");

    try {
      // Mock AI logic for hackathon
      const reply = `This is your AI tutor response to: "${input}"`;
      setChatLogs([...chatLogs, userMsg, { role: "assistant", content: reply }]);
      onReceiveAnswer(reply);
    } catch (e) {
      console.error(e);
      setChatLogs([...chatLogs, { role: "assistant", content: "Sorry, AI failed." }]);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "0.5rem",
        }}
      >
        {chatLogs.map((m, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the AI tutor..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
