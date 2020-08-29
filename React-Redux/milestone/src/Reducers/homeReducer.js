import { bindActionCreators } from "redux";
const homeReducer=function allProductsReducer(state=null,action){


    var allProducts= [
        {
            productName: "mobile1",
            productPrice: 50000,
            productimage: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            productDescription: "fgvhbjn",
            productStock: 20,
            productCategory: "Electronics",
        id: 1
        },
        {
            productName: "park avenue",
            productPrice: 50,
            productimage: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            productDescription: "Nice Perfume",
            productStock: 25,
            productCategory: "Perfumes",
        id: 2
        }
        
    ]
    switch (action.type) {
        case "NEW_PRODUCT":
                                   
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newAllProducts = [{ 
                                        id:length+1, 
                                        productName  : action.payload.productName ,
                                        productimage: action.payload.productimage,
                                        productPrice:action.payload.productPrice,
                                        productStock:action.payload.productStock,
                                        productDescription:action.payload.productDescription,
                                        productCategory:action.payload.productCategory
                                    }, ...state]
            return newAllProducts
        case "DELETE_PRODUCT":
            console.log(action.payload);
            allProducts = state.filter((product) => {
            return (product.id !== action.payload)
            })
            return allProducts
            case "EDIT_PRODUCT":
      console.log(action.payload)
      for(var i in state){
        if(parseInt(action.payload.id)===state[i].id){
          state[i].productName=action.payload.productName
          state[i].productPrice=action.payload.productPrice
          state[i].productimage=action.payload.productimage
          state[i].productStock=action.payload.productStock
          state[i].productDescription=action.payload.productDescription
          state[i].productCategory=action.payload.productCategory
        }
      }
      return state;

  }
  return allProducts
}
export default homeReducer;
