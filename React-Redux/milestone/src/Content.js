import React from 'react';
import {Switch,Route} from "react-router-dom";  
import HomeContainer from './Containers/homeContainer';
import AddProductContainer from './Containers/addProductContainer';
import EditProductContainer from './Containers/editProductContainer';


// import EditProduct from './EditProduct';

class Content extends React.Component {
    render() { 
        return ( 
            <div>
            <Switch>
                <Route exact path='/' component={HomeContainer}></Route>
                 <Route path='/addproduct' component={AddProductContainer}></Route>
                <Route path='/editproduct' component={EditProductContainer}></Route>
               
              
            </Switch>
            </div>
         );
    }
}
export default Content;