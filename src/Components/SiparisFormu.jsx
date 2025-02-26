import React, { useState } from "react";
import './SiparisFormu.css';
import logo from "../assets/logo.svg";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SiparisFormu() {
  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [hataMesaji, setHataMesaji] = useState('');

  const handleEkMalzemeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setEkMalzemeler((prev) => [...prev, value]);
      setToplamFiyat((prev) => prev + 5);
      
    } else {
      setEkMalzemeler((prev) => prev.filter((item) => item !== value));
      setToplamFiyat((prev) => prev - 5);
    }
  };

  const handleBoyutChange = (e) => {
    setBoyut(e.target.value);
    let selectedBoyut = e.target.value;
    let yeniFiyat = 85.50;

    if (selectedBoyut === "Küçük") {
      yeniFiyat = 85.50;
    } else if (selectedBoyut === "Orta") {
      yeniFiyat = 85.50 + 20;
    } else if (selectedBoyut === "Büyük") {
      yeniFiyat = 85.50 + 40;
    }

    setPizzaPrice(yeniFiyat);
    setToplamFiyat((prev) => prev + (yeniFiyat - pizzaPrice));
  }

  const handleHamurChange = (e) => {
    setHamur(e.target.value);
  } 

  const history = useHistory();

  const [pizzaPrice, setPizzaPrice] = useState(85.50)
  const [toplamFiyat, setToplamFiyat]= useState(85.50);
  

  const handleFormSubmit = (e) => {
      e.preventDefault();

      if(!hamur || !boyut) {
        setHataMesaji("Lütfen Boyut ve hamur seçin")
        return;
      }

      if (ekMalzemeler.length < 4) {
        setHataMesaji('Lütfen en az 4 malzeme seçin.');
        return;
      } else if (ekMalzemeler.length > 10) {
        setHataMesaji('Lütfen en fazla 10 malzeme seçin.');
        return;
      }


        setHataMesaji('');
        history.push("/SiparisOnayi");

  }

    return (
    <div>
      <div className="siparis-formu-container">
        <img src={logo} alt="logo" className="logo"/>


        <nav className="navigation">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/SiparisFormu">Seçenekler</Link></li>
          <li><Link to="/SiparisOlustur">Sipariş Oluştur</Link></li>
        </ul>
      </nav>
      </div>

      <h1 className="aciPizza">Position Absolute Acı Pizza</h1>
        <p className="fiyatRengi">{pizzaPrice}₺</p>
        <form onSubmit={handleFormSubmit}>
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
            <div>
            <h3>Hamur Seç</h3>
            <select value={hamur} onChange={handleHamurChange}>
              <option value="">Seçiniz</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>

            </div>
            <div>
            <h3>Ek Malzemeler:</h3>
            {['Sosis', 'Salam', 'Turşu', 'Domates', 'Mantar', 'Zeytin', 'Peperoni', 'Biber', 'Soğan', 'Keçi Peyniri', 'Ton Balığı', 'Ananas', 'Kaşar Peyniri', 'Sünger Ekstra', 'Sos'].map((malzeme) => (
              <label key={malzeme}>
                <input
                  type="checkbox"
                  value={malzeme}
                  onChange={handleEkMalzemeChange}
                />
                {malzeme}
              </label>
            ))}
          </div>  
          {hataMesaji && <p style={{ color: 'blue' }}>{hataMesaji}</p>}
              <p> {toplamFiyat}</p> {/* TOPLAM SİPARİŞ FİYATI */}
            <button type="submit" >SİPARİŞ VER </button>
            

        </form>
        </div>
    );
}