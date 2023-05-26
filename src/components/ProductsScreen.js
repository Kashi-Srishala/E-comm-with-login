import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ProductsScreen.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CartContext } from './CartContext';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductsScreen = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <h1 className="h1-label">Products</h1>
      <Container>
        <Row>
          {productsArr.map((product) => (
            <Col key={product.id} md={6} lg={6} xl={3} className="mb-4">
              <Card className="shadow-lg">
                <Link to={`/products/${product.id}`}>
                  <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="success" onClick={() => addToCart(`button${product.id}`)}>
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsScreen;
