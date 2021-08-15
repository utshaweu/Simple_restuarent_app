import React from 'react';
import './Cart.css';

const Cart = (props) => {

  const cart = props.cart;

  let totalPrice = 0;
  for(let i = 0; i< cart.length; i++){
    let product = cart[i];
    totalPrice = totalPrice + product.price;
  }

  let vat = totalPrice / 15;

  const formatNumber = (num) => {
    let precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div className="cart">
      <h4>Order Summery</h4>
      <h3>Item Ordered: {cart.length}</h3>
      <h4>Product Price: {totalPrice} <span>$</span></h4>
      <h5>Vat: {formatNumber(vat)} <span>$</span></h5>
      <p>Total Price: {formatNumber(totalPrice + vat)} <span>$</span></p>
    </div>
  );
};

export default Cart;