import React, { Component } from "react";
import fire from "../config/fire";
import { Link } from "react-router-dom";

class NavBar2 extends Component {
  state = {};

  logOut = () => {
    fire.auth().signOut();
  };

  render() {
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
                    to={"/Login"}
                  >
                    Home
                  </Link>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "white", width: "100px" }}
                  className="btn btn-outline-secondary m-2 "
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Contact"}
                  >
                    Contact Us
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a
                  style={{ color: "white", width: "100px" }}
                  className="btn btn-outline-secondary m-2 "
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/About"}
                  >
                    About
                  </Link>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                onClick={this.logOut}
                className="btn btn-outline-success m-2 "
              >
                Logout
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar2;
