import React, { Component } from "react";
import NavBar2 from "../components/NavBar2";
import Form from "react-bootstrap/Form";


class Contact extends Component {
  state = {};
  render() {
    return (
      <div style={{ background:'whitesmoke'}}>
        <NavBar2 />
        <Form style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
          <Form.Group controlId="exampleForm.ControlInput1" style={{ marginTop: "20px" }}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Musa Obi Wale" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" style={{ height: "280px" }} />
          </Form.Group>
          <button style={{ width: "100px" }} class="btn btn-outline-success m-2">
            Send
          </button>{" "}
          <button
            style={{ marginLeft: "20px", width: "100px" }}
            class="btn btn-outline-danger m-2"
          >
            Cancel
          </button>
        </Form>
        ;
      </div>
    );
  }
}

export default Contact;
