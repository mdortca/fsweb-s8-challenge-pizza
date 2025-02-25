import React, { useState } from "react";
import './SiparisFormu.css';
import logo from "../assets/logo.svg";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SiparisFormu() {
  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);



  const handleBoyutChange = (e) => {
    setBoyut(e.target.value);
  }

  const history = useHistory();

  const [pizzaPrice, setPizzaPrice] = useState(85.50)
  
  const handleButtonClick = () => {
    history.push("/SiparisOnayi");
  }

    return (
      <div className="siparis-formu-container">
        <img src={logo} alt="logo" className="logo"/>


        <nav className="navigation">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/SiparisFormu">Seçenekler</Link></li>
          <li><Link to="/SiparisOlustur">Sipariş Oluştur</Link></li>
        </ul>
      </nav>
      <div>

      <h1 className="aciPizza">Position Absolute Acı Pizza</h1>
        <p className="fiyatRengi">{pizzaPrice}₺</p>
        {/* Siparis Formunun içerigi burada */}
        <div>
          <h3>Boyut Seç</h3>
          <label>
            <input
            type="radio"
            value="Küçük"
            checked={boyut === "Küçük"}
            onChange={handleBoyutChange}
            />
            Küçük
          </label>
          <label>
            <input 
            type="radio"
            value="Orta"
            checked={boyut === "Orta"}
            onChange={handleBoyutChange}
            />
            Orta
          </label>
          <label>
            <input 
            type="radio"
            value="Büyük"
            checked={boyut === "Büyük"}
            onChange={handleBoyutChange}
            />
            Büyük
          </label>
        </div>

      </div>
        <button onClick={handleButtonClick}>SİPARİŞ VER </button>
      </div>
    );
}