const editProductReducer = function editProductReducer(state = null, action){
    switch (action.type) {
        case "EDIT_PRODUCT":       
            return action.payload    
        default:
            break;
    }
   return state
}

export default editProductReducer