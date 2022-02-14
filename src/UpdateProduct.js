import Header from './Header';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
function UpdateProduct(){
    const [data, setData] = useState([]);
    let props=useParams();
    console.log(props);
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
        </div>
    )
}
export default UpdateProduct;