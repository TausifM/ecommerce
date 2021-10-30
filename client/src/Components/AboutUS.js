import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../images/about_img.png";

function AboutUS() {
  return (
    <>
      <div id="about" className="about top_layer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <h2>About us</h2>
                <p>
                  Our plant is based in major cities of the India. We are
                  experienced and best in our work
                </p>
              </div>
            </div>
            <div className=" col-sm-12">
              <div className="about_box">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="about_box_text">
                      <h3>Best Furniture Designer and Manufacturer</h3>
                      <p>
                        We are team of like-minded designers, engineers, and
                        artists – all looking to make a difference in the world
                        with our craft. We focus on creating design that is
                        visually stunning, yet not cheap or overpriced. The
                        results are elegant and practical, and we do it with a
                        lot of love and support.
                      </p>
                      <Link className="read_more" to="/about">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className=" col-md-7  pppp">
                    <div className="about_box_img">
                      <figure>
                        <img src={AboutImg} alt="#" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
