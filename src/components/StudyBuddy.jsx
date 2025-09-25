import React, { useState } from "react";
import "./StudyBuddy.css";

export default function StudyBuddy({ onAnswer }) {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    const userMsg = { role: "user", content: input };
    setConversation([...conversation, userMsg]);
    setInput("");

    const reply = `Hint: Think about "${input}" again.`;
    setConversation((prev) => [...prev, { role: "assistant", content: reply }]);
    if (onAnswer) onAnswer(reply);
  };

  return (
    <div className="buddy-container">
      <div className="buddy-animation"></div>
      <div className="buddy-chat">
        <div className="chat-box">
          {conversation.map((msg, i) => (
            <div key={i}><b>{msg.role}:</b> {msg.content}</div>
          ))}
        </div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
