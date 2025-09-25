import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f0f4f8", minHeight: "100vh" }}>
      <nav style={{
        display: "flex",
        gap: "2rem",
        padding: "1rem 2rem",
        background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
        color: "white",
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>EduVerse Hub</Link>
        <Link to="/math-world" style={{ color: "white" }}>Math</Link>
        <Link to="/history-world" style={{ color: "white" }}>History</Link>
        <Link to="/biology-world" style={{ color: "white" }}>Biology</Link>
        <Link to="/physics-world" style={{ color: "white" }}>Physics</Link>
        <Link to="/english-world" style={{ color: "white" }}>English</Link>
        <Link to="/political-world" style={{ color: "white" }}>Political</Link>
        <Link to="/social-world" style={{ color: "white" }}>Social</Link>
      </nav>
      <main style={{ padding: "2rem" }}>{children}</main>
    </div>
  );
}
