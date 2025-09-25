import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";
import Hub from "./pages/Hub";
import MathWorld from "./pages/MathWorld";
import HistoryWorld from "./pages/HistoryWorld";
import BiologyWorld from "./pages/BiologyWorld";
import PhysicsWorld from "./pages/PhysicsWorld";
import EnglishWorld from "./pages/EnglishWorld";
import PoliticalWorld from "./pages/PoliticalWorld";
import SocialWorld from "./pages/SocialWorld";
import SkillHub from "./pages/SkillHub";
import TeacherDashboard from "./pages/TeacherDashboard";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(90deg, #b19cd9, #e0b0ff)",
    color: "white",
    fontWeight: "bold",
    borderBottom: "2px solid #9b59b6",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    transition: "0.2s",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "60px",
    right: "2rem",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    display: menuOpen ? "block" : "none",
    zIndex: 1000,
  };

  const dropdownItemStyle = {
    display: "block",
    padding: "0.8rem 1.2rem",
    color: "#6a11cb",
    textDecoration: "none",
    fontWeight: "500",
    transition: "background 0.2s ease",
  };

  const dropdownItemHover = {
    background: "#f4e3ff",
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <a href="/teacher-dashboard">Teacher Dashboard</a>

      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="/" style={linkStyle}>Student</Link>
          <Link to="/dashboard" style={linkStyle}>Teacher Dashboard</Link>
          <Link to="/hub" style={linkStyle}>EduVerse Hub</Link>
        </div>

        {/* Dropdown Menu */}
        <div style={{ position: "relative" }}>
          <button
            style={{
              ...linkStyle,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Worlds ▾
          </button>
          <div style={dropdownStyle}>
            {[
              { name: "Math World", path: "/math-world" },
              { name: "History World", path: "/history-world" },
              { name: "Biology World", path: "/biology-world" },
              { name: "Physics World", path: "/physics-world" },
              { name: "English World", path: "/english-world" },
              { name: "Political World", path: "/political-world" },
              { name: "Social World", path: "/social-world" },
            ].map((world, index) => (
              <Link
                key={index}
                to={world.path}
                style={dropdownItemStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, dropdownItemHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, { background: "white" })
                }
                onClick={() => setMenuOpen(false)}
              >
                {world.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem", background: "#f7f3fb" }}>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/math-world" element={<MathWorld />} />
          <Route path="/history-world" element={<HistoryWorld />} />
          <Route path="/biology-world" element={<BiologyWorld />} />
          <Route path="/physics-world" element={<PhysicsWorld />} />
          <Route path="/english-world" element={<EnglishWorld />} />
          <Route path="/political-world" element={<PoliticalWorld />} />
          <Route path="/social-world" element={<SocialWorld />} />
          <Route path="/skill-hub" element={<SkillHub />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#6a11cb",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
        }}
      >
        EduVerse &copy; {new Date().getFullYear()} — Learning Made Fun 🌐
      </footer>
    </div>
  );
}