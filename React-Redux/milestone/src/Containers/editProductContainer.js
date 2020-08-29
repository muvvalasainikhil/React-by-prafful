import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import editProductBroadcast from "../actions/editProductBroadcast";
class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);
    let product = this.props.product.filter((pro) => {
      return pro.id === this.props.location.state.myid;
    });
    console.log(this.props);
    console.log(this.props.location);
    console.log(this.props.location.state);
    this.state = {
      id: product[0].id,
      productName: product[0].productName,
      productPrice: product[0].productPrice,
      productStock: product[0].productStock,
      productDescription: product[0].productDescription,
      productCategory: product[0].productCategory,
      productimage: product[0].productimage,
    };
  }

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
  EditProduct = () => {
    let editproduct = {
      id: this.state.id,
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productStock: this.state.productStock,
      productDescription: this.state.productDescription,
      productCategory: this.state.productCategory,
      productimage: this.state.productimage,
    };
    this.props.sendNewEditProduct(editproduct);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="editpbg">
        <div className="transbox">
          <form>
            <h2>Edit/Update</h2>
            <hr></hr>
            <label>Id: </label>
            <input type="text" value={this.state.id} readOnly></input>
            <br></br>
            <br></br>
            <label>Name: </label>
            <input
              type="text"
              id="productName"
              value={this.state.productName}
              onChange={this.getName}
            ></input>

            <br></br>
            <br></br>
            <label>Price: </label>
            <input
              type="number"
              id="productPrice"
              value={this.state.productPrice}
              onChange={this.getprice}
            ></input>

            <br></br>
            <br></br>
            <label>Description: </label>
            <input
              type="text"
              id="productDescription"
              value={this.state.productDescription}
              onChange={this.getDescription}
            ></input>

            <br></br>
            <br></br>
            <label>Stock: </label>
            <input
              type="number"
              id="productStock"
              value={this.state.productStock}
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

            <button type="button" onClick={this.EditProduct}>
              Edit Product
            </button>
            <br></br>
          </form>
        </div>
      </div>
    );
  }
}
function convertStoreToProps(store) {
  return {
    product: store.home,
  };
}
function convertPropToEventAndBroadcast(dispatch) {
  return bindActionCreators(
    {
      sendNewEditProduct: editProductBroadcast,
    },
    dispatch
  );
}

export default connect(
  convertStoreToProps,
  convertPropToEventAndBroadcast
)(EditProductContainer);
