import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const Products = (props) => {
	return (
		<div className="container ">
			{props.product &&
				props.product.map((item) => (
					<Link to={`/product/${item.imdbID}`} key={item.imdbID}>
						<div className="box">
							<img src="https://res.cloudinary.com/dtyuldw8b/image/upload/v1633127536/sample.jpg"></img>
						</div>
						<div className="product">
							<p>Item Brand</p>
							<p>Product name</p>
							<p>Price</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Products;
/*<img src={item.Poster} alt="product"></img> */
