import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrls: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
    ],
    reviews: ['Great product! Highly recommend.',
    'Good quality and affordable price.',
    'Fast shipping and excellent customer service.'],
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrls: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://images.pexels.com/photos/16754787/pexels-photo-16754787/free-photo-of-sun-over-flamingos-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/16754827/pexels-photo-16754827/free-photo-of-waterfall-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    reviews: ['I love this product! It exceeded my expectations.',
    'Not satisfied with the product. Poor quality.',
    'The price is too high for the value received.',],
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrls: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://images.pexels.com/photos/16754787/pexels-photo-16754787/free-photo-of-sun-over-flamingos-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/16754827/pexels-photo-16754827/free-photo-of-waterfall-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    reviews: ['I love this product! It exceeded my expectations.',
    'Not satisfied with the product. Poor quality.',
    'The price is too high for the value received.',],
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrls: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://images.pexels.com/photos/16754787/pexels-photo-16754787/free-photo-of-sun-over-flamingos-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/16754827/pexels-photo-16754827/free-photo-of-waterfall-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    reviews: ['Average product, nothing special.',
    'Fantastic purchase! Will buy again.',
    'Disappointed with the shipping time.'],
  },
  // Rest of the products...
];

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productsArr.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="ProductDetails">
      <h2>{product.title}</h2>
      {product.imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
      <h3>Reviews:</h3>
      {product.reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  );
};

export default ProductDetails;
