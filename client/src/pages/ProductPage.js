import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Products from './Products';

//created a functional component that will iterate thru the response JSON
const ProductPage = (props) => {
	const [product, setProduct] = useState([]);

	// const getProduct = () => {
	// 	fetch(`https://api.cloudinary.com/v1_1/dtyuldw8b`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setProduct();
	// 			console.log(data);
	// 		})
	// 		.catch((error) => console.error(error));
	// };

	// useEffect(() => {
	// 	getProduct();
	// }, []);

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
