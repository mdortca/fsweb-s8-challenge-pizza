import React from "react";
import './AnaSayfa.css';
import logo from "../assets/logo.svg";

export default function AnaSayfa() {
    return (
      <div className="ana-sayfa-container">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
    );
}