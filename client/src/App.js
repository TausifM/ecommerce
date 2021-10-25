import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import "./css/style.css";
import "./css/responsive.css";
import ProductDetails from "./Components/ProductDetails";
import Search from "./Components/Product/Search";
import Cart from "./Components/Cart/Cart";
import LoginSignUp from "./Components/User/LoginSignUp";
import Profile from "./Components/User/Profile";
import { useSelector } from "react-redux";
import UserOptions from "./Components/Header/UserOptions";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import UpdateProfile from "./Components/User/UpdateProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import OrderDetails from "./Components/Order/OrderDetails";
import MyOrders from "./Components/Order/MyOrders";
import store from "./store";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/userAction";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductReviews from "./Components/Admin/ProductReviews";
import UpdateUser from "./Components/Admin/UpdateUser";
import UsersList from "./Components/Admin/UsersList";
import ProcessOrder from "./Components/Admin/ProcessOrder";
import OrderList from "./Components/Admin/OrderList";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import NewProduct from "./Components/Admin/NewProduct";
import ProductList from "./Components/Admin/ProductList";
import Dashboard from "./Components/Admin/Dashboard";
import About from "./Components/Layout/About/About";
import Contact from "./Components/Layout/Contact/Contact";
import Products from "./Components/Copy";
import NotFound from "./Components/Layout/NotFound/NotFound";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import OrderSuccess from "./Components/Cart/OrderSuccess";
import axios from "axios";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
