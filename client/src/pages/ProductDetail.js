import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const ProductDetail = (props) => {
	const match = useRouteMatch();

	return (
		<>
			{props.product.map((item) => {
				if (match.params.id === item.imdbID) {
					return <img src={item.Poster} key={item.imdbID}></img>;
				}
			})}
		</>
	);
};

export default ProductDetail;
