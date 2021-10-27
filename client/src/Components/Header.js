import React from "react";
import "../css/style.css";
import "../css/responsive.css";
import Logo from "../images/logo_footer.png";
import SideNavbar from "./SideNavbar";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaSearch,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import { AiOutlineAccountBook } from "react-icons/ai";

const Header = ({ user }) => {
  return (
    <React.Fragment>
      <div className="top-navbar">
        <div className="top-navbar-container">
          <h6 className="Login">
            <div className="social">
              <div className="icon">
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaLinkedin />
                <FaInstagramSquare />
              </div>
            </div>
            <div>
              <Link to="/login">
                <Person />
              </Link>
            </div>
            Register |
            <div>
              <Link to="/login">
                <AiOutlineAccountBook />
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
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
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
                    <Link to="/contact">
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
