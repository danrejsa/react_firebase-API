import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ width: "100%", position: "sticky", top: "0" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li style={{ border: "white" }} class="nav-item active">
              <a
                style={{ color: "white", width: "100px" }}
                className="btn btn-outline-secondary m-2 "
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/"}
                >
                  DanRej
                </Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a className="btn btn-outline-success m-2 ">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/Login"}
              >
                Sign In
              </Link>
            </a>
            <a style={{ color: "white" }} class="btn btn-outline-danger m-2 ">
              <Link
                style={{ color: "white",textDecoration: "none" }}
                to={"/SignUp"}
              >
                Sign Up
              </Link>
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
