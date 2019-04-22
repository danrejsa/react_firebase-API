import React, { Component } from "react";
import { Link } from "react-router-dom";

class PhotoDetail extends Component {
  state = {
    activePhoto: []
  };

  componentDidMount() {
    const fotos = this.props.location.gal;
    this.setState({
      activePhoto: fotos
    });
  }

  render() {
    const foto = this.state.activePhoto;
    return (
      <div>
        <a
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            background: "whitesmoke"
          }}
        >
          <Link style={{ fontSize: "20px" }} to={"/gallery"}>
            <i class="material-icons">arrow_back</i>return
          </Link>
        </a>
        <div
          style={{
            width: "50%",
            marginLeft: "auto",
            background: "navajowhite",
            marginRight: "auto",
            height: "400px",
            marginTop: "40px"
          }}
        >
          <div
            style={{
              marginLeft: "auto",
              width: "300px",
              height: "300px",
              marginRight: "auto"
            }}
          >
            <p>{foto.title}</p>{" "}
            <img
              style={{
                width: "300px",
                height: "300px"
              }}
              src={foto.url}
              alt="missing image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
