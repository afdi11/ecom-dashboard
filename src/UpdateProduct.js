import Header from './Header';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseurl } from "./services/api";
function UpdateProduct(){
    const [data, setData] = useState([]);
    let param=useParams();
    console.log(param);
    useEffect(async() => {
        try {
            const response = await baseurl.get('product/'+param.id);
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }, []);
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
            <div className='col-sm-6 offset-sm-3'>
                <br/>
                <input className='form-control' type="text" defaultValue={data.Nama}/>
                <input className='form-control' type="text" defaultValue={data.Harga}/>
                <input className='form-control' type="text" defaultValue={data.Deskripsi}/>
                <input className='form-control' type="file" defaultValue={data.File_path}/><br/>
                <img style={{width:300}} src={"http://localhost:8000/"+data.File_path}/><br/>
                <button className='btnDelete'>Update Product</button>
            </div>
        </div>
    )
}
export default UpdateProduct;