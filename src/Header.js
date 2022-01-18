import React from 'react';
import { Navbar,
    Nav,
    Container, } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                <Nav className="me-auto navbar-wrapper">
                    {localStorage.getItem("user-info")?(
                        <>
                            <Link to="/add">Add Product</Link>
                            <Link to="/update">Update Product</Link>
                        </>
                    ):(
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header