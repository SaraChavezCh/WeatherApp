import WeatherInfo from '../Components/WeatherInfo'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect (()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 4000)
  }, [])
  // const cloudyDay = "cloudy";
  // const clearSky = "sun";
  // const thunderstorm = "thunderstorm";
  // const snow = "snow";
  // const rain = "rain";
  // const weatherbg = [rain, cloudyDay, clearSky, thunderstorm, snow];
 
// a la app ponerle el bg de la imagen 
  return (
    <div className="App">
      {
        loading ?  <RingLoader
        color={"#4A90E2"} loading={loading} size={200} /> :
     
      <WeatherInfo/>
}
    </div>
    
  )
}

export default App
