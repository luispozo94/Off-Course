import React from 'react';
import { Fragment } from 'react';
import './product.css';
//created a functional component that will iterate thru the response JSON
const Product = (props) => {
	return (
		<div className="container ">
			{props.product &&
				props.product.map((item) => (
					<div class="box" key={item.imdbID}>
						<img src={item.Poster} alt="product"></img>
						<div>
							<p>Item</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Product;
// bg-white-400  min-h-screen flex items-center justify-center
//grid grid-cols-3
//hover:bg-blue-300
//p-3 rounded
