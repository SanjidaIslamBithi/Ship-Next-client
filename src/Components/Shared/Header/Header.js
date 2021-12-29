import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/ShipNext.png';
// import './Header.css';
const Header = () => {
  const { user, logout } = useAuth();
  const { photoURL, displayName, email } = user;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand href='/'>Ship-Next</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/shop'>Shop</Nav.Link>
              <Nav.Link href='/about'>AboutUs</Nav.Link>
              <Nav.Link href='/contact'>ContactUs</Nav.Link>
              {user.email && <Nav.Link href='/dashboard'>Dashboard</Nav.Link>}
              <Nav.Link href='/search'>Search</Nav.Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              {user?.email ? (
                <div>
                  {' '}
                  <Navbar.Text>
                    <a href='#login'>{user?.displayName}</a>
                    <Image
                      className='justify-content-end'
                      src={user.photoURL}
                      size='sm'
                      alt=''
                      width='50'
                      height='50'
                      roundedCircle
                    />
                  </Navbar.Text>
                  <Button className='custom-black-btn' onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
