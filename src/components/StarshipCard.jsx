// src/components/StarshipCard.jsx

import '../App.css';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <div className="info">
        <h3>Class</h3>
        <p>{starship.starship_class}</p>
      </div>
      <div className="info">
        <h3>Manufacturer</h3>
        <p>{starship.manufacturer}</p>
      </div>
      <div className="info">
        <h3>Model</h3>
        <p>{starship.model}</p>
      </div>
    </div>
  );
}

export default StarshipCard;

