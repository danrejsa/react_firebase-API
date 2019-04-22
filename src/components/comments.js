import React, { Component } from "react";
import NavBar2 from "../components/NavBar2";
import Nav from "react-bootstrap/Nav";
import Progress from "../components/progress";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";


class Comments extends Component {
  state = {
    comments: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(json => {
        this.setState({
          comments: json,
          isLoaded: true
        });
      });
  }

  render() {
    const comments = this.state.comments;
    const loaded = this.state.isLoaded;

    if (!loaded) {
      return (
        <div>
          <NavBar2 />

          <div>
            <Nav variant="tabs" defaultActiveKey="/comments">
              <Nav.Item>
                <Nav.Link href="/HomePage" eventKey="link-1">
                  <strong>Users</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/comments">
                  <strong>Comments</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery" eventKey="link-2">
                  <strong>Gallery</strong>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            ;
          </div>
          <p style={{ marginLeft: "500px", color: "red" }}>
            Data loading from external api........
          </p>
          <Progress />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar2  />
          
          
          <div>
            <Nav variant="tabs" defaultActiveKey="/comments">
              <Nav.Item>
                <Nav.Link href="/HomePage" eventKey="link-1">
                  <strong>Users</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/comments">
                  <strong>Comments</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery" eventKey="link-2">
                  <strong>Gallery</strong>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            ;
          </div>
          <Form inline style={{ marginLeft: "78%" }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {" "}
              {comments.map(comment => (
                <li
                  style={{
                    display: "block",
                    padding: "14px 16px"
                  }}
                  key={comment.id}
                >
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "seashell",
                      listStyleType: "none",
                      padding: 0,
                      margin: 0
                    }}
                  >
                    <li>
                      {" "}
                      <h4 style={{ textTransform: "capitalize" }}>
                        {comment.id}. <span />
                        {comment.name}
                      </h4>
                    </li>
                    <strong style={{ marginLeft: "25px" }}> Message: </strong>
                    <li style={{ marginLeft: "25px" }}>
                      <span />
                      <span>{comment.body}</span>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Comments;
