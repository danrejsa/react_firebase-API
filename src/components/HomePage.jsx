import React, { Component } from "react";
import Tab from "../components/tab";
import NavBar2 from "../components/NavBar2";
import Users from "../components/users";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar2 />
        <Tab />
        <Users />
      </div>
    );
  }
}

export default HomePage;
