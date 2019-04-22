import React, { Component } from "react";
import HomePage from "../components/HomePage";
import fire from "../config/fire";
import NavBar from "../components/NavBar";



class Login extends Component {
 state = {
      email: "",
      password: "",
      user: {},
      name:''
    
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        alert("login error! Check your login details");
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.user){
      return (
        <div><HomePage/></div>
      )
    }else{   
    return (
      <div>       
        <NavBar />
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "120px"
          }}
          className="col-md-4"
        >
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <button
              onClick={this.login}
              
              type="submit"
              target="_parent"
              class="btn btn-outline-success m-2 "
            >
              Login
            </button>
            <span class="btn btn-outline- m-2 ">
           
            </span>
          </form>
        </div>

      
      </div>
    );
  }
}
}
export default Login;
