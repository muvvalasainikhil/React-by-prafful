import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import deleteProductBroadcast from "../actions/deleteproductbroadcast";
import editProductBroadcast from "../actions/editProductBroadcast";
require("./homeContainer.css");

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myid: 0,
      products: [],
    };
  }

  openAddProduct = () => {
    this.props.history.push("/addProduct");
  };
  editProduct = (id) => {
    this.setState({ myid: id });
    this.props.history.push({
      pathname: "/editproduct",
      state: { myid: id },
    });
  };

  renderAllProducts = () => {
    let imgStyle = {
      width: "200px",
      height: "200px",
      borderRadius: "10px",
    };
    return this.props.home.map((product) => {
      return (
        <div className="column">
          <div className="card">
            <img src={product.productimage} style={imgStyle}></img>
            {/* <h4>Id :  {product.id}</h4> */}
            <h4>Product Name :{product.productName}</h4>
            <h4>Price:{product.productPrice}</h4>
            <h4>Description:{product.productDescription}</h4>
            <h4>Stock Available:{product.productStock}</h4>
            <h4>Product Category:{product.productCategory}</h4>
            <button
              className="edit"
              onClick={() => this.editProduct(product.id)}
            >
              Edit
            </button>
            &emsp;&emsp;&emsp;&emsp;
            <button
              className="delete"
              onClick={() => this.props.deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <button onClick={this.openAddProduct} className="btnbg">
          Add Product
        </button>

        {this.renderAllProducts()}

        <br></br>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}
function convertPropToEventAndBroadcast(dispatch) {
  return bindActionCreators(
    {
      deleteProduct: deleteProductBroadcast,
      editProduct: editProductBroadcast,
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  convertPropToEventAndBroadcast
)(HomeContainer);
