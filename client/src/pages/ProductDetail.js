import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetail = props => {
  const match = useRouteMatch();

  return (
    <>
      {props.product.map(item => {
        if (match.params.id === item.imdbID) {
          return (
            <div className="product_container">
              <div className="product_photo">
                <img src={item.Poster} key={item.imdbID}></img>
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
