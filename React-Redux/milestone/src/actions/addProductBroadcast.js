const addProductBroadcast=function(product){
    return({
        type:'NEW_PRODUCT',
        payload:product
    })
}
export default addProductBroadcast