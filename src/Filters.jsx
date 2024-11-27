import React, { useState } from 'react';

function Filters({ applyFilters }) {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [popularity, setPopularity] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ category, price, popularity });
  };

  return (
    <div className="filters">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Catégorie</option>
        <option value="Vêtements">Vêtements</option>
        <option value="Électronique">Électronique</option>
      </select>
      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Prix</option>
        <option value="low">Moins cher</option>
        <option value="high">Plus cher</option>
      </select>
      <select value={popularity} onChange={(e) => setPopularity(e.target.value)}>
        <option value="">Popularité</option>
        <option value="high">Plus populaire</option>
        <option value="low">Moins populaire</option>
      </select>
      <button onClick={handleApplyFilters}>Appliquer les filtres</button>
    </div>
  );
}

export default Filters;
