import '../styles/navigation.css';
import logo from '../assets/otapi_icon.png';

import React from 'react';
import {
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Navigation(props) {
  return (
    <>
        <Nav vertical className="sidebar">
          <NavbarBrand href="/"><img className="brand-logo" alt="logo" src={logo}/></NavbarBrand>
          <div className="category-block">
            <NavItem className="category-link" >
                  <NavLink to="/apparel"><p>apparel</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink to="/accessories"><p>accessories</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink to="/prints"><p>prints</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink to="/living"><p>living</p></NavLink>
            </NavItem>
          </div>
        </Nav>
        {props.children}
    </>
);
}

export default Navigation;
