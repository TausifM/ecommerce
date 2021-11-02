import React, { Fragment, useState } from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./UserOptions.css";
import { Home } from "@material-ui/icons";

const UserOptions = ({ user }) => {
  const userPace = ({ user }) => {
    user.role = "admin";
  };
  const userAvatar = ({ user }) => {
    user.avatar = user.avatar.url;
  };
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <Home />, name: "Home", func: home },

    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (userPace) {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/admin/dashboard");
  }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function cart() {
    history.push("/cart");
  }
  function home() {
    history.push("/");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    history.push("/");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "12" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={userAvatar ? userAvatar : "/profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
