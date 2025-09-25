import React from "react";
import SkillBadge from "./SkillBadge";

export default function SkillMarketplace({ badges }) {
  return (
    <div>
      <h3>🏆 Skill Marketplace</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {badges.map((badge, i) => (
          <SkillBadge key={i} skill={badge.skill} level={badge.level} />
        ))}
      </div>
    </div>
  );
}
