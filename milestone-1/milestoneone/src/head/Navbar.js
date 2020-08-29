import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import "./navbar.css";
import Signin from "../signinandsignup/Signin";
import SignUp from "../signinandsignup/Signup";
import Home from "../content/HomeComponent/Home";
import AddUpComponent from "../content/addupcomponent/AddUpComponent";
import UpdateComponent from "../content/UpdateComponent/UpdateComponent";
//import Dashboard from '../content/Dasboard';
import ParentDashboard from "../content/ParentDashBoardComponent/ParentDashboard";
import About from "../content/About";
import Footer from "../content/Footer";

class Nav extends React.Component {
  logOut(e) {
    e.preventDefault();
    console.log("loggedout");
    localStorage.removeItem("loggedIn");
    this.props.history.push("/");
  }

  render() {
    const loginreglink = (
      <div className="custom-nav">
        <Link>
          <b> Product Inventory System</b>
        </Link>
        <Link to="/Signup">SignUp</Link>
        <Link to="/">Signin</Link>
        <Link to="/About">About</Link>
      </div>
    );
    const userLink = (
      <div className="custom-nav">
        <Link>
          <b> Product Inventory System</b>
        </Link>
        <Link onClick={this.logOut.bind(this)}>Logout</Link>
        <Link to="/addproduct">Add Product</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
        {/* <Link to="/About">About</Link> */}
      </div>
    );
    return (
      <div>
        {localStorage.loggedIn ? userLink : loginreglink}
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/addproduct" component={AddUpComponent}></Route>
          <Route path="/editproduct/:id" component={UpdateComponent}></Route>
          <Route path="/dashboard" component={ParentDashboard}></Route>
          <Route path="/About" component={About}></Route>
          {/* <Route path="/about" component={About}></Route> */}
        </Switch>
        <Footer />
        {/* {
          window.location.pathname === '/' ? '' : <Footer />
        } */}
      </div>
    );
  }
}

export default withRouter(Nav);
