import Header from './Header';
import React,{useState} from 'react';
import { baseurl } from './services/api';


function AddProduct(){
    const [nama,setName]=useState("");
    const [dokument,setFile]=useState("");
    const [price,setHarga]=useState("");
    const [deskripsi,setDeskripsi]=useState("");
    function addProduct(){
        console.log(nama,dokument,price,deskripsi);
        var formData=new FormData();
        formData.append("nama",nama);
        formData.append("dokument",dokument);
        formData.append("price",price);
        formData.append("deskripsi",deskripsi);
        // let item={nama,dokument,price,deskripsi};
        console.log(formData);
        
        baseurl.post("addProduct",formData).then((result)=>{
            alert("Berhasil Menambahkan Product");
            console.log(result);
            // localStorage.setItem("user-info",JSON.stringify(result));
            // navigate("/add")
        }).catch((error)=>{
            alert("Gagal Menambahkan Product",error);
            console.log(error);
        })
    }
    return(
        <div>
            <Header/>
            <h1>Halaman Add Product</h1>
            <div className='col-sm-6 offset-sm-3'>
                <br/>
                <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Nama...'
                    onChange={(e)=>setName(e.target.value)}>
                </input>
                <input 
                    type="file" 
                    className='form-control' 
                    placeholder='Upload File'
                    onChange={(e)=>setFile(e.target.files[0])}>
                </input>
                <input 
                    type="number" 
                    className='form-control' 
                    placeholder='Harga...'
                    onChange={(e)=>setHarga(e.target.value)}
                ></input>
                <textarea 
                    type="text" 
                    className='form-control' 
                    placeholder='Descripsi...'
                    onChange={(e)=>setDeskripsi(e.target.value)}
                ></textarea>
                <br/>
                <button className='btn btn-primary'onClick={addProduct}>
                    Add Product
                </button>
            </div>
        </div>
    )
}
export default AddProduct