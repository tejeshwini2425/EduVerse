import React, { useState } from "react";

export default function AILessonComposer() {
  const [topic, setTopic] = useState("");
  const [lessonPlan, setLessonPlan] = useState(null);

  const generateLesson = () => {
    const mockLesson = {
      structure: `Lesson on ${topic}: Introduction → Key Concepts → Examples → Q&A → Assessment`,
      quizzes: [`Quiz on ${topic} - Q1`, `Quiz on ${topic} - Q2`],
      visuals: [`Diagram of ${topic}`, `${topic} infographic`],
      gamifiedChallenges: [`${topic} Puzzle`, `${topic} Interactive Quiz`]
    };
    setLessonPlan(mockLesson);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h3>📝 AI Lesson Composer</h3>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={generateLesson} style={{ padding: "5px 10px", marginLeft: "5px" }}>Generate</button>

      {lessonPlan && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Lesson Structure:</h4>
          <p>{lessonPlan.structure}</p>
          <h4>Quizzes:</h4>
          <ul>{lessonPlan.quizzes.map((q, i) => <li key={i}>{q}</li>)}</ul>
          <h4>Visuals:</h4>
          <ul>{lessonPlan.visuals.map((v, i) => <li key={i}>{v}</li>)}</ul>
          <h4>Gamified Challenges:</h4>
          <ul>{lessonPlan.gamifiedChallenges.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
