import React, { useState } from "react";
import SkillMarketplace from "../components/SkillMarketplace";

export default function SkillHub() {
  const [badges, setBadges] = useState([
    { skill: "Math", level: "Intermediate" },
    { skill: "Science", level: "Beginner" },
    { skill: "Coding", level: "Advanced" }
  ]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>EduVerse SkillHub 🎓</h2>
      <p>Earn micro-credentials for completing learning milestones.</p>
      <SkillMarketplace badges={badges} />
    </div>
  );
}
