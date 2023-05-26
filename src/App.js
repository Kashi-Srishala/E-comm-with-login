import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductsScreen from './components/ProductsScreen';
import Cart from './components/Cart';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { CartProvider } from './components/CartContext';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;











// import React, { useState, useEffect, useCallback } from 'react';
// import MoviesList from './components/API-Calls/MoviesList';
// import './App.css';
// import AddMovie from './components/API-Calls/AddMovie';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchMoviesHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         'https://react-http-46085-default-rtdb.firebaseio.com/movies.json'
//       );
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const data = await response.json();

//       const loadedMovies = [];

//       for (const key in data) {
//         loadedMovies.push({
//           id: key,
//           title: data[key].title,
//           openingText: data[key].openingText,
//           releaseDate: data[key].releaseDate,
//         });
//       }

//       setMovies(loadedMovies);
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);

//   async function addMovieHandler(movie) {
//     const response = await fetch(
//       'https://react-http-46085-default-rtdb.firebaseio.com/movies.json',
//       {
//         method: 'POST',
//         body: JSON.stringify(movie),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   }

//   async function deleteMovieHandler(movieId) {
//     try {
//       const response = await fetch(
//         `https://react-http-46085-default-rtdb.firebaseio.com/movies/${movieId}.json`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }
//       setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   let content = <p>Found no movies.</p>;

//   if (movies.length > 0) {
//     content = <MoviesList movies={movies} onDeleteMovie={deleteMovieHandler} />;
//   }

//   if (error) {
//     content = <p>{error}</p>;
//   }

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler} />
//       </section>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }

// export default App;











// import React from 'react';
// import { CartProvider } from './components/CartContext';
// import Cart from './components/Cart';
// import ProductsScreen from './components/ProductsScreen';
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import HomePage from "./components/pages/Home";
// import ProductsPage from "./components/pages/Products";

// const router = createBrowserRouter([
//   {path: '/', element: <HomePage/>},
//   {path: '/products', element: <ProductsPage />}
// ]);

// const App = () => {
//   return (
    // <CartProvider>
    //   <Cart />
    //   <ProductsScreen />
    // </CartProvider>
//     <RouterProvider router={router}/>
//   );
// };

// export default App;