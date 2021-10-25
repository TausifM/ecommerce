import React from "react";
import {  FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addItemsToCart } from "../actions/cartAction";
const ProductPage = ({ product, match }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id));
    alert.success("Item Added To Cart");
  };
 
  return (
    <>
          <Link to={`/product/${product.id}`}>
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={product.images[0].url} alt={product.name}
                    style={{width: "20vmax"}} />
                      <span>({product.numOfReviews} Reviews)</span>
                    <h2>{`Rs. ${product.price}`}</h2>
                    <p>{product.name}</p>
                    <button disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                      className="btn btn-default add-to-cart">
                      <FaShoppingCart /> Add to cart
                    </button>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>{`Rs. ${product.price}`}</h2>
                      <p>{product.name}</p>
                      <button 
                      disabled={product.Stock < 1 ? true : false}
                      className="btn btn-default add-to-cart">
                        <FaShoppingCart /> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
    </>
  );
};

export default ProductPage;
