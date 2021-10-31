import React, { Fragment, useEffect, useState } from "react";
import "../css/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../actions/productAction";
import Loader from "./Layout/Loader";
import ProductCard from "./Products";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "./Layout/MetaData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@material-ui/core";
import { FaArrowDown } from "react-icons/fa";

const categories = [
  "Chairs",
  "Bed",
  "Sofa",
  "Plywood",
  "Mattresses",
  "Kids Room",
  "Bed Room",
];
const matteressCategory = [
  "Single Bed Matteresses",
  "Queen Bed Matteresses",
  "King Bed Matteresses",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="Scontainer">
            <div className="filterBox">
              <h3>Categories</h3>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
                <li>
                  <div>
                    <Accordion
                      className="panel-body"
                      style={{ marginTop: "5px" }}
                    >
                      <AccordionSummary
                        expandIcon={<FaArrowDown />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Mattresses</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                            {matteressCategory.map((mattress) => (
                              <li
                                className="category-link"
                                key={mattress}
                                onClick={() => setCategory(mattress)}
                              >
                                <Link to="/mattress">{mattress}</Link>
                              </li>
                            ))}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </li>
              </ul>
            </div>
            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
