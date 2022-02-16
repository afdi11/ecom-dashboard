import Header from './Header';
import React,{useState} from 'react';
import { Table } from "react-bootstrap";
import { baseurl } from "./services/api";
import { Link } from "react-router-dom";
function SearchProduct(){
    const[data,setData]=useState([]);
    async function search(key){
        console.log(key);
        try {
            const response = await baseurl.get('search/'+key);
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    async function deleteOperation(id){
        let text = "Apakah anda yakin akan menghapus product?\nPilih OK or Cancel.";
        if (window.confirm(text) == true) {
            text = "Berhasil Menghapus Product";
            let result = await baseurl.delete("delete/"+id);
        } else {
            text = "Batal Menghapus Product";
        }
        alert(text);
        search()
        // getData();
        // data.splice(data.findIndex(function(i){
        //     return i.ID === id;
        // }), 1);
        // setData(data);
    }
    function updateOperation() {
        
    }
    return(
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Product</h1>
                <br/>
                <input
                    onChange={(e)=>search(
                        e.target.value
                    )}
                    type="text"
                    className='form-control'
                    placeholder='Type to search for a product'
                />
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Photo</th>
                        <th>Destinasi</th>
                        <th>Harga</th>
                        <th>Deskripsi</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item,index)=>(
                        <tr>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                <img style={{width:100}} src={"http://localhost:8000/"+item.File_path}></img>
                            </td>
                            <td>
                                {item.Nama}
                            </td>
                            <td>
                                {item.Harga}
                            </td>
                            <td>
                                {item.Deskripsi}
                            </td>
                            <td>
                                <span className="btnDelete" onClick={()=>deleteOperation(item.ID)}>Delete</span>
                                <Link to={"/update/"+item.ID}>
                                    <span className="btnUpdate" onClick={()=>updateOperation(item.ID)}>Update</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default SearchProduct