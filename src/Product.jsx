import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Catégorie : {product.category}</p>
      <p>Prix : {product.price} €</p>
      <p>Popularité : {product.popularity} ⭐</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
