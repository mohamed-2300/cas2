import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Prix : {item.price} €</p>
      <p>Catégorie : {item.category}</p>
    </div>
  );
}

export default CartItem;
