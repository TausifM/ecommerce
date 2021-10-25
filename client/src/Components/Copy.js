import React, { Fragment, useEffect, useState } from "react";
import "../css/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../actions/productAction.js";
import Loader from "./Layout/Loader.js";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "./Layout/MetaData.js";
import ProductCard from "./Products";
import "./csss/main.css";
import "./csss/responsive.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const categories = [
  "Chairs",
  "Bed",
  "Furniture",
  "Plywood",
  "Mattresses",
  "Kids Room",
  "Bed Room",
];
function valuetext(value) {
  return `${value}`;
}

const Products = ({ match }) => {
  const matteressCategory = [
    "Single Bed Matteresses",
    "Queen Bed Matteresses",
    "King Bed Matteresses",
  ];
  const [ratings, setRatings] = useState(0);
  const handleChange = (event, newValue) => {
    setRatings(newValue);
  };
  const dispatch = useDispatch();
  const alert = useAlert();

  const [category, setCategory] = useState("");
  const { products, loading, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, category, ratings));
  }, [dispatch, keyword, category, alert, error, ratings]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- SMB Furniture" />
          <section style={{ marginTop: "20px" }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="left-sidebar">
                    <h2>Category</h2>
                    <div className="panel-group category-products">
                      {/*category-productsr*/}
                      <div className="panel panel-default">
                        <Typography component="legend" className="price-range">
                          Price Range
                        </Typography>
                        {keyword && (
                          <Box sx={{ width: 150 }}>
                            <Slider
                              getAriaLabel={() => "Temperature range"}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                              min={0}
                              max={25000}
                            />
                          </Box>
                        )}

                        <div>
                          <Accordion className="panel-body">
                            <AccordionSummary
                              expandIcon={<FaPlus />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>Furniture</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <ul>
                                  {categories.map((category) => (
                                    <li
                                      className="category-link"
                                      key={category}
                                      onClick={() => setCategory(category)}
                                    >
                                      <Link>{category}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <div className="panel panel-default">
                            <div>
                              <Accordion
                                className="panel-body"
                                style={{ marginTop: "5px" }}
                              >
                                <AccordionSummary
                                  expandIcon={<FaPlus />}
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
                                          <Link>{mattress}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div>
                              <Accordion
                                className="panel-body"
                                style={{ marginTop: "5px" }}
                              >
                                <AccordionSummary
                                  expandIcon={<FaPlus />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>Living</Typography>
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
                                          {mattress}
                                        </li>
                                      ))}
                                    </ul>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="brands_products">
                      {/*brands_products*/}
                      <h2>Brands</h2>
                      <div className="brands-name">
                        <ul className="nav nav-pills nav-stacked">
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(50)</span>Godrej
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(56)</span>Other
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(27)</span>Nilkamal
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(32)</span>Sani
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(5)</span>Modular
                              Furniture
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(9)</span>Other
                            </a>
                          </li>
                          <li>
                            <a href="/#/">
                              {" "}
                              <span className="pull-right">(4)</span>Other
                              creative
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <fieldset>
                      <Typography component="legend">Ratings Above</Typography>
                      <Box sx={{ width: 150 }}>
                        <Slider
                          getAriaLabel={() => "Temperature range"}
                          value={ratings}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          min={0}
                          max={5}
                        />
                      </Box>
                    </fieldset>
                  </div>
                </div>
                <div className="col-sm-9 padding-right">
                  <div className="features_items">
                    <h2 className="title text-center">Features Items</h2>
                    <div className="col-sm-4-products">
                      {products &&
                        products.map((product) => (
                          <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                    <div className="paginationBox">
                      <ul className="pagination">
                        <li className="active">
                          <a href="/">1</a>
                        </li>
                        <li>
                          <a href="/">2</a>
                        </li>
                        <li>
                          <a href="/">3</a>
                        </li>
                        <li>
                          <a href="/">&raquo;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
