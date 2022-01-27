import Header from "./Header";
import React,{useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import { baseurl } from "./services/api";

function ProductList(){
    const [data,setData]=useState("");
    baseurl.get('listProduct')
        .then(function(response){
            console.log(response.data);
            setData(response.data);
        }).catch(function (error){
            console.log(error);
        })
    return(
        <div>
            <Header/>
            <h1>Product Lists</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Destinasi</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            nomor
                        </td>
                        <td>nama</td>
                        <td>
                            Harga
                        </td>
                        <td>
                            Deskripsi
                        </td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default ProductList