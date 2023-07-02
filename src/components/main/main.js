import './main.css';
import { useState, useRef } from 'react';

const Main = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const mainWRef = useRef(null);

  function changeCity(e) {
    setCity(e.target.value);
  }

  function submitCity(e) {
    e.preventDefault();
    const url = `http://api.weatherapi.com/v1/current.json?key=b4ad24d32cdb4c25a3814617232706&q=${city}&aqi=no`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity('');
      })
      .catch(() => {
        if (mainWRef.current) {
          mainWRef.current.textContent = 'Kota tidak ditemukan atau input nama kota salah';
        }
      });
  }

  return (
    <div>
      <form className="main">
        <input type="text" value={city} placeholder="Enter a city name..." className="main-input" onChange={changeCity} />
        <button className="main-btn" onClick={submitCity}>
          Cari
        </button>
      </form>
      <div className="main-weather" ref={mainWRef}>
        {weatherData ? (
          <div className="area">
            <h2 className="city">
              {weatherData.location.name}, {weatherData.location.region}
            </h2>
            <p className="date">{weatherData.location.localtime}</p>
            <div className="condi">
              <p className="condition">{weatherData.current.condition.text}</p>
              <img src={weatherData.current.condition.icon} alt="derajat" />
            </div>
            <div className="temp">
              <p className="temperature">{weatherData.current.temp_c}&deg;</p>
            </div>
          </div>
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </div>
    </div>
  );
};

export default Main;
