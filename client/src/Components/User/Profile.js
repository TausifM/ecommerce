import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { clearErrors } from "../../actions/userAction";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const { user, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const history = useHistory();
  const userAvatar = ({ user }) => {
    user.avatar = user.avatar.url;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [history, isAuthenticated, user, dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={userAvatar} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
