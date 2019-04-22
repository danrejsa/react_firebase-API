import React from "react";
import Nav from "react-bootstrap/Nav";

const Tab = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/HomePage">
        <Nav.Item>
          <Nav.Link href="/HomePage">
            <strong>Users</strong>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/comments" eventKey="link-1">
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
  );
};

export default Tab;
