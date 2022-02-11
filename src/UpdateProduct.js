import Header from './Header';
import React from 'react';
function UpdateProduct(props){
    console.log("props",props);
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
        </div>
    )
}
export default UpdateProduct;