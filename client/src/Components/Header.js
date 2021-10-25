import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Logo from "../images/logo_footer.png";
import SideNavbar from "./SideNavbar";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import { AiOutlineAccountBook } from "react-icons/ai";

const Header = () => {
  return (
    <React.Fragment>
      <div className="top-navbar">
        <div className="top-navbar-container">
          <h6 className="Login">
            <div className="social">
              <div className="icon">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
              </div>
            </div>
            <div className="user">
              <Link to="/login">
                <Person className="icon" />
              </Link>
            </div>
            Register |
            <div>
              <Link to="/login">
                <AiOutlineAccountBook className="icon" />
              </Link>
            </div>
            Sign-in
          </h6>
        </div>
      </div>
      <header>
        <div className="head-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-9">
                <ul className="email text_align_right">
                  <li className="d_none">
                    <Link to="/">
                      {" "}
                      <FaPhone />
                      +91 8793423424
                    </Link>
                  </li>
                  <li className="d_none">
                    <Link to="/contact-us">
                      <FaEnvelope /> contact@smbfurniture.in
                    </Link>
                  </li>
                  <li className="d_none">
                    {" "}
                    <Link to="/login">
                      Login <FaUser></FaUser>
                    </Link>{" "}
                  </li>
                  <li className="d_none">
                    <Link to="/search">
                      <FaSearch aria-hidden="true"></FaSearch>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <SideNavbar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
