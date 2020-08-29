import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import addProductBroadcast from "../actions/addProductBroadcast";
require("./addProduct.css");
class AddProductContainer extends React.Component {
  getName = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productName: event.target.value });
  };

  getprice = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productPrice: event.target.value });
  };

  getDescription = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productDescription: event.target.value });
  };

  getStock = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productStock: event.target.value });
  };

  getCategory = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productCategory: event.target.value });
  };

  getImage = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ productimage: event.target.value });
  };

  AddProduct = () => {
    console.log("Add product via axios and post");

    let product = {
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productDescription: this.state.productDescription,
      productStock: this.state.productStock,
      productCategory: this.state.productCategory,
      productimage: this.state.productimage,
    };
    this.props.sendNewProduct(product);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="addpbg">
        <div className="transbox">
          <form>
            {/* <h2 className="add">ADD</h2><hr></hr> */}
            <label> Name </label>
            <input
              type="text"
              id="productName"
              placeholder="Enter Name"
              onChange={this.getName}
            ></input>

            <br></br>
            <br></br>
            <label>price</label>
            <input
              type="number"
              id="productPrice"
              placeholder="Enter Price"
              onChange={this.getprice}
            />

            <br></br>
            <br></br>
            <label>Description</label>
            <input
              type="text"
              id="productDescription"
              placeholder="Enter Description"
              onChange={this.getDescription}
            ></input>

            <br></br>
            <br></br>
            <label>Stock</label>
            <input
              type="number"
              id="productStock"
              placeholder="Enter Stock"
              onChange={this.getStock}
            ></input>

            <br></br>
            <br></br>
            <label>Category</label>
            <select
              name="category"
              id="productCategory"
              onChange={this.getCategory}
            >
              <option value=""> Select Category</option>
              <option value="Electronics" onChange={this.getCategory}>
                Electronics
              </option>
              <option value="Perfumes" onChange={this.getCategory}>
                Perfumes
              </option>
              <option value="clothing" onChange={this.getCategory}>
                clothing
              </option>
            </select>

            <br></br>
            <br></br>
            <label> &nbsp;Product Image: </label>
            <input
              type="text"
              placeholder="Enter Image Url"
              onChange={this.getImage}
            />
            <br></br>
            <br></br>
            <button type="button" onClick={this.AddProduct}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function convertPropToEventAndBroadcast(dispatch) {
  return bindActionCreators(
    {
      sendNewProduct: addProductBroadcast,
    },
    dispatch
  );
}

export default connect(
  null,
  convertPropToEventAndBroadcast
)(AddProductContainer);
