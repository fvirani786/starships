// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { fetchStarships } from './services/starshipService';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarships = async () => {
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
      setLoading(false);
    };
    getStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1 className="box">Starship Search</h1>
      <div className="box">
        <StarshipSearch onSearch={handleSearch} />
      </div>
      <div className="box">
        {loading ? <p>Loading your battle ships! Get ready!...</p> : <StarshipList starships={filteredStarships} />}
        
      </div>
      <div className='box'>
        


      </div>
    </main>
  );
}

export default App;

