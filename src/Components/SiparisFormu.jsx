import React from "react";
import './SiparisFormu.css';
import logo from "../assets/logo.svg";

export default function SiparisFormu() {
    return (
      <div className="siparis-formu-container">
        <img src={logo} alt="logo" className="logo"/>
        <button>SİPARİŞ VER </button>
      </div>
    );
}