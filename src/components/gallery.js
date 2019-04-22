import React, { Component } from "react";
import NavBar2 from "../components/NavBar2";
import Nav from "react-bootstrap/Nav";
import Progress from "../components/progress";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class Gallery extends Component {
  state = {
    gallery: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(json => {
        this.setState({
          gallery: json,
          isLoaded: true
        });
      });
  }

  render() {
    const galleria = this.state.gallery;
    const loaded = this.state.isLoaded;
    if (!loaded) {
      return (
        <div>
          <NavBar2 />
          <div>
            <Nav variant="tabs" defaultActiveKey="/gallery">
              <Nav.Item>
                <Nav.Link href="/HomePage" eventKey="link-1">
                  <strong>Users</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/comments" eventKey="link-2">
                  <strong>Comments</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery">
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
          <NavBar2 fixed="top" />
          <div>
            <Nav variant="tabs" defaultActiveKey="/gallery">
              <Nav.Item>
                <Nav.Link href="/HomePage" eventKey="link-1">
                  <strong>Users</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/comments" eventKey="link-2">
                  <strong>Comments</strong>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery">
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
              {galleria.map(gal => (
                <li
                  style={{
                    display: "block",
                    padding: "14px 16px"
                  }}
                  key={gal.id}
                >
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "azure",
                      listStyleType: "none",
                      padding: 0,
                      margin: 0
                    }}
                  >
                    <li>
                      {" "}
                      <h4 style={{ textTransform: "capitalize" }}>
                        <Link
                          to={{
                            pathname: `/photoDetail/${gal.id}`,
                            gal: gal
                          }}
                        >
                          <span style={{ color: "black" }}>{gal.id} </span>
                          <span />
                          {gal.title}
                        </Link>
                      </h4>
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      <span>{gal.url}</span>
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
export default Gallery;
