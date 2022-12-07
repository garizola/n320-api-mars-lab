import { useState, useEffect } from "react";
import { MarsGallery } from './MarsGallery'
import { NasaAPIConnection } from "./DataConnection";
import Snowfall from "react-snowfall";
import './App.css';

function App() {

  const [year, setYear] = useState(2010);
  const [pics, setPics] = useState([]);

  useEffect(() => {

    const timer = setTimeout( async () => {
      let returnedPictures = await NasaAPIConnection(year);
      setPics(returnedPictures.photos);
      
    }, 1000)
    return () => clearInterval(timer);

    
  }, [year])
  

  return (
    <div className="App">
      <h1>Christmas on Mars.. </h1>
      <input aria-label="date" type="range"
        min="2008" max="2022" value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
      <p>{year}</p>
      <MarsGallery images={pics} />
      <Snowfall />
      
    </div>
  );

  
}

export default App;
