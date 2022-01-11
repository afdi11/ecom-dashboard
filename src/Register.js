import React,{useState} from 'react';
import { baseurl } from './services/api';
import {useNavigate} from 'react-router-dom';
function Register(){
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();

    function signUp(){
        let item={name,password,email}
        console.log(item);
        
        baseurl.post("register",item).then((res)=>{
            alert("Berhasil cuy");
            console.log(res);
            localStorage.setItem("user-info",JSON.stringify(res))
            navigate("/add");
        }).catch((err)=>{
            alert("Gagal",err);
            console.log(err);
        })
        // const response = await axios.post("localhost:8000/api/register",item);
        // console.log(response);
        // let result = await fetch("localhost:8000/api/register",{
        //     method:'POST',
        //     body:JSON.stringify(item),
        //     headers:{
        //         "content-type":'application/json',
        //         Accept:'application/json',
        //         // "Access-Control-Allow-Credentials" : true 
        //     },
        // })
        // result = await result.json();
        // console.warn("result : ", result)
        // fetch("localhost:8000/api/register",{
        //     method:'POST',
        //     body:JSON.stringify(item),
        //     headers:{
        //         "content-type":'application/json',
        //         Accept:'application/json',
        //         // "Access-Control-Allow-Credentials" : true 
        //     },
        // }).then((response)=>console.log(response))
    }

    return(
        <div className='col-sm-6 offset-sm-3'>
            <header/>
            <h1>Halaman Register</h1>
            <input 
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                className="form-control" 
                placeholder='Nama...'
            />
            <br/><br/>
            <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                className="form-control" 
                placeholder='Password...'
            />
            <br/><br/>
            <input 
                type="text" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                className="form-control" 
                placeholder='Email...'
            />
            <br/><br/>
            <button onClick={()=>{signUp()}} className='btn-primary'>
                Sign-Up
            </button>
        </div>
    )
}
export default Register