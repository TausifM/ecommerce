import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import "../css/productCard.css";

const ProductCard = ({ product }) => {
  const options = {
    size: "small",
    margin: "normal",
    padding: "normal",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div className="productCard">
          <img src={product.images[0].url} alt={product.name} />
          <p>{product.name}</p>
          <div className="ratingStar">
            <Rating
              {...options}
              rating={product.rating}
              numReviews={product.numReviews}
            />
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
