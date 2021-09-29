import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import { Fragment, useState, useEffect } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';

const App = (props) => {
	//initialize a state to store the products
	const [product, setProduct] = useState([
		{
			Title: 'The Matrix',
			Year: '1999',
			imdbID: 'tt0133093',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
		},
		{
			Title: 'Avatar',
			Year: '2009',
			imdbID: 'tt0499549',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		},
		{
			Title: 'Avatar: The Last Airbender',
			Year: '2005–2008',
			imdbID: 'tt0417299',
			Type: 'series',
			Poster: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg',
		},
		{
			Title: 'Avengers: Infinity War',
			Year: '2018',
			imdbID: 'tt4154756',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
		},

		{
			Title: 'The Matrix',
			Year: '1999',
			imdbID: 'tt0133093',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
		},
		{
			Title: 'The Matrix',
			Year: '1999',
			imdbID: 'tt0133093',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
		},
	]);
	//create a function that will make fetch request to an api end point
	const getProduct = () => {
		//	const item = product;
		//const response = await fetch(item);
		//const responseJson = await response.json();
		//	console.log();
		setProduct(product);
	};

	//declare a useEffect to re-render the page everytime theres a search request
	useEffect(() => {
		getProduct();
	}, []);

	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/product" render={() => <Product product={product} />} />
				<Route path="/about" exact component={About} />
				{/* <Route path="/signin" exact component={SignIn} /> */}
				<Route path="/signin" render={() => <RegisterForm/>} />
				<Route path="/cart" exact component={Cart} />
			</Switch>
		</Router>
	);
};

export default App;
