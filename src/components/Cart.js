import React, { useContext, useState } from 'react';
import { Button, Card, Container, Dropdown } from 'react-bootstrap';
import { CartContext } from './CartContext'; // Import the CartContext


const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = () => {
  const { cartCount } = useContext(CartContext); // Access the cartCount value from CartContext
  const [isOpen, setIsOpen] = useState(false);


  const handleRemoveItem = (index) => {
    // Remove the item at the specified index from the cartElements array
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    // Update the cartElements array
    // You can use this updatedCartElements array to update your state or perform any other actions
    console.log(updatedCartElements);
  };

  const handleCartIconClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Container className="d-flex justify-content-end">
      <p className="display-5" style={{ color: 'red'}}>{cartCount}</p>
      <Dropdown show={isOpen} onToggle={handleCartIconClick}>
        <Dropdown.Toggle as={Button} variant="warning">
          Cart Icon
        </Dropdown.Toggle>
        <Dropdown.Menu align="right">
          {cartElements.map((item, index) => (
            <Dropdown.Item key={index}>
              <Card style={{ width: '200px', marginBottom: '10px', height: '160px' }}>
                <Card.Img variant="top" src={item.imageUrl} alt={item.title} style={{ objectFit: 'cover', height: '10%', marginBottom: '10px' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '14px' }}>{item.title}</Card.Title>
                  <Card.Text style={{ fontSize: '12px', marginBottom: '5px' }}>Price: {item.price}</Card.Text>
                  <Card.Text style={{ fontSize: '12px' }}>Quantity: {item.quantity}</Card.Text>
                  <Button size="sm" onClick={() => handleRemoveItem(index)}>Remove</Button>
                </Card.Body>
              </Card>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Cart;
