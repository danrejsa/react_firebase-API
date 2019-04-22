import React, { Component } from "react";
import { Link } from "react-router-dom";


class Details extends Component {
  state = {
    activeUser: []
  };

  componentDidMount = async () => {
    const user$ = this.props.location.state.user;
    console.log(user$);
    this.setState({
      activeUser: user$
    });
  };

  render() {
    //console.log(this.props);
    const useq = this.state.activeUser;
    return (
      <div>
        <a  style={{marginLeft:'20px', marginTop:'20px', background:'whitesmoke'}}>
          <Link style={{fontSize:'20px'}}to={'/HomePage'}><i class="material-icons">arrow_back</i>return</Link>
        </a>
        <ul
          style={{
            width: "600px",
            borderRadius: "10px",
            backgroundColor: "whitesmoke",
            listStyleType: "none",
            padding: 0,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px"
          }}
        >
          <li style={{ display: "block", padding: "14px 16px" }}>
            <li>
              <h1>{useq.name}</h1>
            </li>
            <li>
              <strong>Username:</strong>
              <span>{useq.username}</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>{useq.email}</span>
            </li>
            <li>
              <strong>Website:</strong>
              <span>{useq.website}</span>
            </li>
            <li>
              <strong>Phone:</strong>
              <span>{useq.phone}</span>
            </li>

           
          </li>
        </ul>
      </div>
    );
  }
}

export default Details;
