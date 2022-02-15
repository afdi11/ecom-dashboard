import Header from './Header';
import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { baseurl } from "./services/api";
function UpdateProduct(){
    const [data, setData] = useState([]);
    const [nama,setName]=useState("");
    const [dokument,setFile]=useState("");
    const [price,setHarga]=useState("");
    const [deskripsi,setDeskripsi]=useState("");
    const navigate = useNavigate();
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

    function editProduct(id){
        console.log(nama,dokument,price,deskripsi);
        var formData=new FormData();
        formData.append("nama",nama);
        formData.append("dokument",dokument);
        formData.append("price",price);
        formData.append("deskripsi",deskripsi);
        // let item={nama,dokument,price,deskripsi};
        console.log(formData);
        baseurl.post("updateproduct/"+id+"?_method=PUT",formData).then((result)=>{
            alert("Berhasil Update Product");
            console.log(result);
            navigate("/update");
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
            <h1>Update Product</h1>
            <div className='col-sm-6 offset-sm-3'>
                <br/>
                <img style={{width:300}} src={"http://localhost:8000/"+data.File_path}/><br/><br/>
                <input 
                    className='form-control' 
                    type="text" 
                    defaultValue={data.Nama}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input 
                    className='form-control' 
                    type="file" 
                    defaultValue={data.File_path}
                    onChange={(e)=>setFile(e.target.files[0])}
                />
                <input 
                    className='form-control' 
                    type="text" 
                    defaultValue={data.Harga}
                    onChange={(e)=>setHarga(e.target.value)}
                />
                <input 
                    className='form-control' 
                    type="text" 
                    defaultValue={data.Deskripsi}
                    onChange={(e)=>setDeskripsi(e.target.value)}
                />
                <button className='btnDelete' onClick={()=>editProduct(data.ID)}>Update Product</button>
            </div>
        </div>
    )
}
export default UpdateProduct;