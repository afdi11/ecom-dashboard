import Header from "./Header";
import React,{useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import { baseurl } from "./services/api";

function ProductList(){
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    async function deleteOperation(id){
        let result = await baseurl.delete("delete"+id);
        result=await result.json();
        getData();
    }

    async function getData(){
        try {
            const response = await baseurl.get('listProduct');
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <Header/>
            <h1>Product Lists</h1>
            <div className="col-sm-8 offset-sm-2">
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
                    {data.map((item)=>(
                        <tr>
                            <td>
                                {item.ID}
                            </td>
                            <td>
                                <img style={{width:100}}src={"http://localhost:8000/"+item.File_path}></img>
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
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList