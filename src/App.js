import React, { useState, useEffect } from 'react';
import './App.css';
import Filters from './Filters';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Simuler une liste de produits
  useEffect(() => {
    const initialProducts = [
      { id: 1, name: 'T-shirt', category: 'Vêtements', price: 20, popularity: 5 },
      { id: 2, name: 'Laptop', category: 'Électronique', price: 1000, popularity: 4 },
      { id: 3, name: 'Smartphone', category: 'Électronique', price: 500, popularity: 5 },
      { id: 4, name: 'Chaussures', category: 'Vêtements', price: 50, popularity: 3 },
      { id: 5, name: 'Casquette', category: 'Vêtements', price: 15, popularity: 4 },
    ];
    setProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, []);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Fonction pour appliquer les filtres
  const applyFilters = (filters) => {
    let updatedProducts = [...products];

    if (filters.category) {
      updatedProducts = updatedProducts.filter(product => product.category === filters.category);
    }
    if (filters.price) {
      updatedProducts = updatedProducts.sort((a, b) => filters.price === 'low' ? a.price - b.price : b.price - a.price);
    }
    if (filters.popularity) {
      updatedProducts = updatedProducts.sort((a, b) => filters.popularity === 'high' ? b.popularity - a.popularity : a.popularity - b.popularity);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Site E-Commerce</h1>
      <Filters applyFilters={applyFilters} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
