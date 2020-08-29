const deleteProductBroadcast=function(id){
    return({
        type:'DELETE_PRODUCT',
        payload:id
    })
}
export default deleteProductBroadcast