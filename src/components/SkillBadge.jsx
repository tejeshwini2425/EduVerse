import React from "react";
import "./SkillBadge.css";

export default function SkillBadge({ skill, level }) {
  return (
    <div className="badge">
      <div className="badge-icon">{skill[0]}</div>
      <div className="badge-info">
        <h4>{skill} Badge</h4>
        <p>Level: {level}</p>
      </div>
    </div>
  );
}
