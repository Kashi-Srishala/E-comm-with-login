import React, { useContext, useState } from 'react';
import { Button, Container, Dropdown, Table, Alert } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handlePurchase = () => {
    setCartItems([]);
    setShowThankYou(true);
  };

  const calculateTotalAmount = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2); // Assuming the price is in decimal format with two decimal places
  };

  return (
    <Container className="d-flex justify-content-end">
      <p className="display-5" style={{ color: 'red' }}>
        {cartItems.length}
      </p>
      <Dropdown>
        <Dropdown.Toggle as={Button} variant="warning">
          Cart Icon
        </Dropdown.Toggle>
        <Dropdown.Menu align="right">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: '50px' }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      size="sm"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-right">
            <strong>Total Amount: ${calculateTotalAmount()}</strong>
          </div>
          <div className="text-right mt-3">
            <Button variant="success" onClick={handlePurchase}>
              Purchase
            </Button>
          </div>
          {showThankYou && (
            <Alert variant="success" className="mt-3">
              Thank you for your purchase!
            </Alert>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Cart;
