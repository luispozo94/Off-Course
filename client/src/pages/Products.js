import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

const Products = props => {
  return (
    <div className="container ">
      {props.product &&
        props.product.map(item => (
          <Link to={`/product/${item.imdbID}`} key={item.imdbID}>
            <div className="box">
              <img src={item.Poster} alt="product"></img>
            </div>
            <div className="product_details">
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
