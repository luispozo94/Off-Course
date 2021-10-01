import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Products from './Products';

//created a functional component that will iterate thru the response JSON
const ProductPage = (props) => {
	const [product, setProduct] = useState([
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
	]);
	const getProduct = () => {
		setProduct(product);
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path="/product/:id" render={() => <ProductDetail product={product} />} />;
				<Route exact path="/product" render={() => <Products product={product} />} />
			</Switch>
		</Router>
	);
};

export default ProductPage;
// <Route exact path="/product/:id" render={() => <ProductDetail product={product} />} />;
