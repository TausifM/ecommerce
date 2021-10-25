import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { clearErrors, getProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./csss/main.css";
import "./csss/responsive.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
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
const mattresses = [
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
const ProductsScreen02 = () => {
  const [ratings, setRatings] = useState([0, 5]);
  const [price, setPrice] = useState([0, 25000]);
  const handleChange = (event, newValue) => {
    setRatings(newValue);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const [category, setCategory] = useState("");
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(category, price, ratings));
  }, [dispatch, alert, error, category, price, ratings]);
  return (
    <>
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Category</h2>
          <div className="panel-group category-products">
            {/*category-productsr*/}
            <div className="panel panel-default">
              <Typography component="legend" className="price-range">
                Price Range
              </Typography>
              <Box sx={{ width: 150 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={25000}
                />
              </Box>
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
              </div>
            </div>

            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
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
                        {mattresses.map((mattress) => (
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
            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
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
                        {mattresses.map((mattress) => (
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
            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
                  <AccordionSummary
                    expandIcon={<FaPlus />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Bedroom</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        {mattresses.map((mattress) => (
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
            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
                  <AccordionSummary
                    expandIcon={<FaPlus />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Decor</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        {mattresses.map((mattress) => (
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
            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
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
                        {mattresses.map((mattress) => (
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
            <div className="panel panel-default">
              <div>
                <Accordion className="panel-body" style={{ marginTop: "5px" }}>
                  <AccordionSummary
                    expandIcon={<FaPlus />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Modular Furniture</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul>
                        {mattresses.map((mattress) => (
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
                <fieldset>
                  <Typography component="legend">Ratings Above</Typography>
                  <Box sx={{ width: 150 }}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={ratings}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      max={5}
                    />
                  </Box>
                </fieldset>
              </div>
            </div>
          </div>
          {/*/category-products*/}

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
                    <span className="pull-right">(56)</span>NilKamal
                  </a>
                </li>
                <li>
                  <a href="/#/">
                    {" "}
                    <span className="pull-right">(27)</span>Others
                  </a>
                </li>
                <li>
                  <a href="/#/">
                    {" "}
                    <span className="pull-right">(32)</span>Others
                  </a>
                </li>
                <li>
                  <a href="/#/">
                    {" "}
                    <span className="pull-right">(5)</span>Others
                  </a>
                </li>
                <li>
                  <a href="/#/">
                    {" "}
                    <span className="pull-right">(9)</span>Others
                  </a>
                </li>
                <li>
                  <a href="/#/">
                    {" "}
                    <span className="pull-right">(4)</span>Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*/brands_products*/}
        </div>
      </div>
    </>
  );
};

export default ProductsScreen02;
