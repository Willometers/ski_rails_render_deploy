import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import LogoutButton from "./LogoutButton"


const  NavBar = (user) => {

    const navigate = useNavigate()

    const handleHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/loginpage")
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top" >
           <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button onClick={handleHome}>Home</Button>
                <Button onClick={handleLogin}>{ user.user.email ? user.user.email : "Login" }</Button>
                <LogoutButton user={user}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )

}

export default NavBar