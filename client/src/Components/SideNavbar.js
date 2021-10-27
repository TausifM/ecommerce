import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MenuBtn from "../images/menu_btn.png";
import "../css/responsive.css";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="icon" />,
    cName: "nav-text",
  },
  {
    title: "Shop",
    path: "/products",
    icon: <IoIcons.IoMdCart className="icon" />,
    cName: "nav-text",
  },
  {
    title: "About-us",
    path: "/about",
    icon: <FaIcons.FaPeopleCarry className="icon" />,
    cName: "nav-text",
  },
  {
    title: "Contact-us",
    path: "/contact",
    icon: <FaIcons.FaMobile className="icon" />,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <FaIcons.FaShoppingBasket className="icon" />,
    cName: "nav-text",
  },
];

function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="navbar">
        <img src={MenuBtn} onClick={showSidebar} alt="menu-btn" />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <AiIcons.AiOutlineClose className="close-btn" />
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideNavbar;
