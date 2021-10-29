import { Link } from "react-router-dom";
import Rating from "./Product/Rating";
import "../css/productCard.css";
const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div className="productCard">
          <img src={product.images[0].url} alt={product.name} />
          <p>{product.name}</p>
          <div className="ratingStar">
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <span className="productCardSpan">
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <span>{`₹. ${product.price}`}</span>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
