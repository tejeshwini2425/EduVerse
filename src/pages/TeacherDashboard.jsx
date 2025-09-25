import React from "react";
import AILessonComposer from "../components/AILessonComposer";
import StudentEngagementTracker from "../components/StudentEngagementTracker";
import AdaptiveQuizCreator from "../components/AdaptiveQuizCreator";

export default function TeacherDashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📚 EduVerse Teacher Dashboard</h2>
      <p>Welcome, Teacher! Use these tools to create lessons, track student progress, and adapt quizzes.</p>

      <div style={{ marginTop: "2rem" }}>
        <AILessonComposer />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <StudentEngagementTracker />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <AdaptiveQuizCreator />
      </div>
    </div>
  );
}
