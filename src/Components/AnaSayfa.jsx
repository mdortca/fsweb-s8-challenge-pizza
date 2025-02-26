import React from "react";
import './AnaSayfa.css';
import logo from "../assets/logo.svg";
import { useHistory } from 'react-router-dom';


export default function AnaSayfa() {
  const history = useHistory();
    
  const handleButtonClick = () => {
    history.push("/SiparisFormu")
  };


    return (
      <div className="ana-sayfa-container">
        <img src={logo} alt="Logo" className="logo"/>
        <p>KOD ACIKTIRIR</p>
        <p className="alttaki"> PİZZA,DOYURUR</p>
        <button onClick={handleButtonClick}>ACIKTIM</button>
      </div>
    );
}