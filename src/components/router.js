import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import App from "../App";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import Gallery from "../components/gallery";
import Details from "../components/Details";
import PhotoDetail from "../components/photoDetail";
import Comments from "../components/comments";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App}/>        
        <Route path="/HomePage" component={HomePage} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />       
        <Route path="/Login" component={Login} />
        <Route path="/Home"  component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/comments" component={Comments} />
        <Route path="/Details"  component={Details} />
        <Route path="/photoDetail" component={PhotoDetail} />
        <Route path="/gallery" component={Gallery} />      
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
