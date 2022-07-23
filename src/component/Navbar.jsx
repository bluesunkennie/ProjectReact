import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = (cart) => {
  // const state = useSelector((state) => state.handleCart);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white  py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bolder " to="#" style={{ fontSize: 35 }}>
            Figuge
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link
                  class="nav-link active fw-bolder me-2"
                  style={{ color: "black", fontSize: 25 }}
                  aria-aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link fw-bolder me-2"
                  to="/products"
                  style={{ color: "black", fontSize: 25 }}
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/contacts"
                  class="nav-link fw-bolder me-2"
                  style={{ color: "black", fontSize: 25 }}
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/abouts"
                  class="nav-link fw-bolder me-2"
                  style={{ color: "black", fontSize: 25 }}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="buttons-login">
              <a href="" className="btn  ms-2">
                <i className="fa fa-sign-in me-1" style={{ fontSize: 20 }}></i>
              </a>
              <a href="" className="btn  ms-2">
                <i
                  className="fa fa-user-plus me-1"
                  style={{ fontSize: 20 }}
                ></i>
              </a>
              <Link to="/cart" className="btn  ms-2">
                <i
                  className="fa fa-shopping-cart me-1"
                  style={{ fontSize: 20 }}
                >
                  ({cart.length})
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
