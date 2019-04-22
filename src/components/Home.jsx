import React, { Component } from "react";

const Home = () => {
  return (
    <div>
      <p style={{ marginLeft: "33%", fontSize: "35px", marginTop: "40px" }}>
        Welcome to my Home Page!
      </p>
      <p
        style={{
          color: "red",
          marginLeft: "33%",
          fontSize: "18px",
          marginTop: "10px"
        }}
      >
        Register or Login to view data from public Restful API!
      </p>
      <div className="myImage" />
      <p
        style={{
          color: "gray",
          marginLeft: "45%",
          fontSize: "18px"
        }}
      >
        Powered by DanRej
      </p>
    </div>
  );
};

export default Home;
