import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function HistoryBack() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav className="nav">
        <a className="nav-link" onClick={() => navigate("/")}>
          <i className="bi bi-chevron-left"></i> Back
        </a>
      </nav>
    </div>
  );
}
