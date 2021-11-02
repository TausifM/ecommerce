import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import RImg1 from "../images/re_img1.jpg";
import RImg2 from "../images/re_img2.jpg";
import RImg3 from "../images/re_img3.jpg";
import RImg4 from "../images/re_img4.jpg";
import FooterImg from "../images/logo_footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <ul className="social_icon text_align_center">
              <li>
                {" "}
                <a href="/#">
                  <div>
                    <FaFacebookF />
                  </div>
                </a>
              </li>
              <li>
                {" "}
                <a href="/#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                {" "}
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="reader">
              <a href="/">
                <img src={FooterImg} alt="#" />
              </a>
              <p className="padd_flet40">
                We are team of like-minded designers, engineers, and artists –
                all looking to make a difference in the world with our craft. We
                focus on creating design that is visually stunning, yet not
                cheap or overpriced. The results are elegant and practical, and
                we do it with a lot of love and support.
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="reader">
              <h3>Explore</h3>
              <ul className="xple_menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/products">Shop</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="reader">
              <h3>Recent Posts</h3>
              <ul className="re_post">
                <li>
                  <img src={RImg1} alt="#" />
                </li>
                <li>
                  <img src={RImg2} alt="#" />
                </li>
                <li>
                  <img src={RImg3} alt="#" />
                </li>
                <li>
                  <img src={RImg4} alt="#" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="reader">
              <h3>Contact Us</h3>
              <p>
                Email: <br />
                contactsmbfurniture.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text_align_center">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <p>
                Copyright 2021 All Right Reserved By
                <a href="https://smbfurniture.in"> SMB Furniture</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
