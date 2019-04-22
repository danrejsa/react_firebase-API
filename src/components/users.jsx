import React, { Component } from "react";
import { Link } from "react-router-dom";
import Progress from "../components/progress";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

class Users extends Component {
  state = {
    isLoaded: false,
    users: []
  };

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    var { isLoaded, users } = this.state;
    if (!isLoaded) {
      return (
        <div>
          {" "}
          <p style={{ marginLeft: "500px", color: "red" }}>
            Data loading from external api........
          </p>
          <Progress />{" "}
        </div>
      );
    } else {
      return (
        <div>
          <Form inline style={{marginLeft:'78%'}}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>

          
            {" "}
            {users.map(user => (
              <li
                style={{
                  display: "block",
                  padding: "14px 16px"
                }}
                key={user.id}
              >
                <ul
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "whitesmoke",
                    listStyleType: "none",
                    padding: 0,
                    margin: 0
                  }}
                >
                  <li>
                    {" "}
                    <h3>
                      <Link
                        to={{
                          pathname: `/Details/${user.id}`,
                          state: { user: user }
                        }}
                      >
                        {user.name}
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <strong>Email: </strong>
                    <span>{user.email}</span>
                  </li>
                  <li>
                    <strong>Website: </strong>
                    <a href="https://{user.website}">
                      <span>{user.website}</span>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Users;
