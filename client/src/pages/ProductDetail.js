import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetail = props => {
  const match = useRouteMatch();

  let isDisabled = false;

  let classList = 'add_to_cart';
  function handleButtonClick() {
    fetch('https://buy.stripe.com/test_aEU5o8cMAecc82kbIK');
  }

  if (match.params.id === 2) {
    classList += ' disabled';
  }

  return (
    <>
      {props.product.map(item => {
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
                {match.params.id !== '2' && (
                  <a
                    href="https://buy.stripe.com/test_aEU5o8cMAecc82kbIK"
                    className={classList}
                  >
                    Buy Now
                  </a>
                )}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ProductDetail;
