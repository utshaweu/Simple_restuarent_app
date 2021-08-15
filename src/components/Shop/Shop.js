import React from 'react';
import { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import data from '../../ProductData/ProductData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

  const [products, setProducts] = useState(data);
  console.log(products);

  const [cart, setCart] = useState([]);

  const handlerAddProduct = (product) => {
    //console.log("clicked", product);
    const newCart = [...cart, product];
    setCart(newCart);

  }

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <div>
            <Row>
              {
                products.map(item => (
                  <Col lg={4}>
                    <Product product={item} key={item.id} handlerAddProduct={handlerAddProduct}></Product>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Col>
        <Col lg={3}>
          <div>
            <Cart cart={cart}></Cart>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;