import React, { useState } from "react";
import app_config from "../../config";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {
  const { title, themeColor } = app_config;
  const url = app_config.apiUrl;

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const showAvatar = () => {
    return (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          to="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={
              currentUser.avatar
                ? `${url}/${currentUser.avatar}`
                : "/avatar.png"
            }
            className="rounded-circle"
            height={30}
          />
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/user/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" onClick={logout} type="button">
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/main/home">
          <div className="d-flex align-items-center">
            <img src="/logo.png" height={50} alt="" />
            <h3 className="ms-2">{title}</h3>
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/profile"
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/mythemes"
              >
                My Themes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/main/browse"
              >
                Customize Theme
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">{showAvatar()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
