import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbarbg">
        <h2>Product Inventory System</h2>
      </div>
    );
  }
}

export default withRouter(Navbar);
