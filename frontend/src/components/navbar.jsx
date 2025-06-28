import React from "react";
import "./navbar.css"; // Optional: for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">AVIR</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/reminders">Reminders</a></li>
        <li><a href="/snaps">Snaps</a></li>
        <li><a href="/calendar">Calendar</a></li>
        <li><a href="/mood">Mood</a></li>
      </ul>
    </nav> 
  );
}; 

export default Navbar;