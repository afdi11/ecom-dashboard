import Header from './Header';
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { baseurl } from './services/api';
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/add");
        }
    },[])

    function login(){
        console.log(email,password);
        let item={email,password};
        baseurl.post("login",item).then((result)=>{
            alert("Selamat Datang ");
            console.log(result);
            localStorage.setItem("user-info",JSON.stringify(result));
            navigate("/add")
        }).catch((error)=>{
            alert("Mohon maaf tidak ada kombinasi email dan password yang cocok",error);
            console.log(error);
        })
    }
    return(
        <div>
            <Header/>
            <h1>Halaman Login</h1>
            <div className="col-sm-6 offset-sm-3">
                <input 
                    type="text" 
                    placeholder="Email..." 
                    onChange={(e)=>setEmail(e.target.value)}
                    className='form-control'
                />
                <br/>
                <input 
                    type="password" 
                    placeholder="Password..." 
                    onChange={(e)=>setPassword(e.target.value)}
                    className='form-control'
                />
                <br/>
                <button onClick={login}className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}
export default Login