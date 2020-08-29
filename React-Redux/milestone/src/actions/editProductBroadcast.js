const editProductBroadcast=function(product){
    return({
        type:'EDIT_PRODUCT',
        payload:product
    })
}
export default editProductBroadcast