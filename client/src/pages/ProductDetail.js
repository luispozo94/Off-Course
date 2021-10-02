import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetail = (props) => {
	const match = useRouteMatch();
	console.log(match);
	console.log(match.params);
	console.log(props);

	return (
		<>
			{props.product.map((item) => {
				if (match.params.id == item.id) {
					return (
						<div className="product_container">
							<div className="product_photo">
								<img src={item.image} key={item.id}></img>
							</div>
							<div className="product_info">
								<p className="brand">Item Brand</p>
								<p className="product_name">Product name</p>
								<p className="price">Price</p>
								<button className="add_to_cart">Add to Cart</button>
							</div>
						</div>
					);
				}
			})}
		</>
	);
};

export default ProductDetail;
