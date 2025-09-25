import React from "react";

export default function Dashboard() {
  const mockData = [
    { name: "Student A", points: 50 },
    { name: "Student B", points: 35 },
    { name: "Student C", points: 70 }
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Teacher Dashboard 📊</h2>
      <p>Overview of student performance</p>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "0.5rem" }}>Name</th>
            <th style={{ padding: "0.5rem" }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((student, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.5rem" }}>{student.name}</td>
              <td style={{ padding: "0.5rem" }}>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
