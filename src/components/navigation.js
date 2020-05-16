import '../styles/navigation.css';
import logo from '../assets/otapi_icon.png';

import React from 'react';
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navigation(props) {
  return (
    <>
        <Nav vertical className="sidebar">
          <NavbarBrand href="/"><img className="brand-logo" alt="logo" src={logo}/></NavbarBrand>
          <div className="category-block">
            <NavItem className="category-link" >
                  <NavLink href="/apparel"><p>apparel</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink href="/accessories"><p>accessories</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink href="/prints"><p>prints</p></NavLink>
            </NavItem>
            <NavItem className="category-link">
                  <NavLink href="/living"><p>living</p></NavLink>
            </NavItem>
          </div>
        </Nav>
        {props.children}
    </>
);
}

export default Navigation;
