import { useNavigate } from "react-router-dom"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const  NavBar = (user) => {

    const navigate = useNavigate()

    const handleHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top" >
           <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button onClick={handleHome}>Home</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar