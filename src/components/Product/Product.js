import React from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {title, details, price, img} = props.product;
  console.log(props);

  return (
      <div className="productItem">
        <img src={img} alt="" />
        <div className="details">
          <h3>{title}</h3>
          <p>{details}</p>
          <p><small>{price} <span>$</span></small></p>
          <Button variant="success" onClick={() => props.handlerAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</Button>
        </div>
      </div>
  );
};

export default Product;