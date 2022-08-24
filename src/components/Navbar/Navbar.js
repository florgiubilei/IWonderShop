import {Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';
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
                        <CartWidget/>
                    </Nav>
                </Container>
            </Navbar>
            <ItemListContainer/>
        </>
    );
}

export default ColorSchemesExample;