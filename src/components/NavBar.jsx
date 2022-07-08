import '../css/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../components/Logo';
import CartIcon from '../components/CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar className='bgColor' expand="lg">
      <Container className='fontColor containerMobile'>
        <Nav.Link href="#home">
        <Link to="/">
          <Logo className="mr-2" />
        </Link>          
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <p className='buyBy'>BUY BY</p>
            
            <Link to="/collection/regular" className='fontColor'>Regular</Link>
            <Link to="/collection/limited" className='fontColor'>Ltd. Editions</Link>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar>
  )
}

export default NavBar