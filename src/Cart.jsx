import React from 'react';
import CartItem from './CartItem';

function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Panier</h2>
      {cart.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        cart.map((item, index) => <CartItem key={index} item={item} />)
      )}
    </div>
  );
}

export default Cart;
