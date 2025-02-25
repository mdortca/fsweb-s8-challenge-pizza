import React from "react";
import './SiparisFormu.css';
import logo from "../assets/logo.svg";
import { useHistory } from 'react-router-dom';

export default function SiparisFormu() {
  const history = useHistory();
  
  const handleButtonClick = () => {
    history.push("/SiparisOnayi");
  }

    return (
      <div className="siparis-formu-container">
        <img src={logo} alt="logo" className="logo"/>
        <button onClick={handleButtonClick}>SİPARİŞ VER </button>
      </div>
    );
}