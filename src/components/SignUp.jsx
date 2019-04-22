import React, { Component } from "react";
import fire from "../config/fire";
import NavBar from "../components/NavBar";

class SignUp extends Component {
    
    state = {
      email: "",
      password: "",
      name:'',
      show: false,
    
  }
 
  signUp = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {      
        alert('Registered sucessfully')
        this.setState({
          email: "",
          password: ""
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
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
          <h1>Sign Up</h1>
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
              style={{ marginLeft: "25px" }}
              onClick={this.signUp}
              type="submit"
              class="btn btn-outline-danger m-2 "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
