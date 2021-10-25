import React, { Fragment } from "react";
import { clearErrors, getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../css/productCard.css";
import Products from "./Products";
import Loader from "./Layout/Loader";
import Slider from "./Slider";
import AboutUS from "./AboutUS";
import Building from "./Building";
import Services from "./Services";
import Instant from "./Instant";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Slider />
          <h2 className="feature-title">FEATURED PRODUCTS</h2>
          <div className="container-product" id="container-product">
            {products &&
              products.map((product) => (
                <Products product={product} key={product._id} />
              ))}
          </div>
          <AboutUS />
          <Building />
          <Services />
          <Instant />
        </Fragment>
      )}
    </>
  );
};

export default Home;
