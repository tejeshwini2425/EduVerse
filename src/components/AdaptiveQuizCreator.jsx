import React, { useState } from "react";

export default function AdaptiveQuizCreator() {
  const [studentName, setStudentName] = useState("");
  const [quiz, setQuiz] = useState(null);

  const createQuiz = () => {
    const mockQuiz = {
      student: studentName,
      questions: [
        `What is the main idea of ${studentName}'s lesson?`,
        `Explain one key concept from ${studentName}'s study.`
      ],
      difficulty: "Intermediate"
    };
    setQuiz(mockQuiz);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h3>🧩 Adaptive Quiz Creator</h3>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={createQuiz} style={{ padding: "5px 10px", marginLeft: "5px" }}>Create Quiz</button>

      {quiz && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Quiz for {quiz.student}</h4>
          <p>Difficulty: {quiz.difficulty}</p>
          <ul>{quiz.questions.map((q, i) => <li key={i}>{q}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
