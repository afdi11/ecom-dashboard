import React from 'react';
import { Navbar,
    Nav,
    Container,
    NavDropdown, } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    let user=JSON.parse(localStorage.getItem('user-info'));
    function logOut(){
        localStorage.clear();
        navigate("/login");
    }
    console.log(user);
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">e-Commerce</Navbar.Brand>
                <Nav className="me-auto navbar-wrapper">
                    {localStorage.getItem("user-info")?(
                        <>
                            <Link to="/list">Daftar Product</Link>
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
                {localStorage.getItem("user-info")?(
                <>
                <Nav>
                    <NavDropdown title={user && user.data.email}>
                        <NavDropdown.ItemText onClick={logOut} className='btnLogOut'>Logout</NavDropdown.ItemText>
                    </NavDropdown>
                </Nav>
                </>
                ):null}
                </Container>
            </Navbar>
        </div>
    )
}
export default Header