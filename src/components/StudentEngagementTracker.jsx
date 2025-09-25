import React from "react";

export default function StudentEngagementTracker() {
  const mockData = [
    { name: "Student A", active: true, struggles: ["Math"] },
    { name: "Student B", active: false, struggles: ["History"] },
    { name: "Student C", active: true, struggles: [] }
  ];

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px", marginTop: "1rem" }}>
      <h3>📊 Real-Time Student Engagement Tracker</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Active</th>
            <th>Struggles</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((student, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{student.name}</td>
              <td>{student.active ? "✅" : "❌"}</td>
              <td>{student.struggles.join(", ") || "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
