import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ColorSchemesExample() {
    return (
        <>
            <Navbar expand="md" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">I Wonder</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Accessories</Nav.Link>
                        <Nav.Link href="#pricing">Clothing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;