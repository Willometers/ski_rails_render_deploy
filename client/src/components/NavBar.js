import { useNavigate } from "react-router-dom"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'


function NavBar() {

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
                <Button onClick={handleLogin}>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )

}

export default NavBar