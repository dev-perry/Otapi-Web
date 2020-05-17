import React from 'react';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import '../styles/cart_popover.css';
import cart_icon from '../assets/cart_icon.svg';

function CartPopover(props){

  return (
    <div className="cart">
        <Button color="link" id="PopoverFocus" type="button" className="cart-button">
          <img className="cart-icon" alt="Cart" src={cart_icon}/>
        </Button>
        <UncontrolledPopover className="cart-bubble" trigger="legacy" placement="left" target="PopoverFocus">
          <div className="cart-header"><h1>cart</h1></div>
          <PopoverBody className="cart-content">
            <p>Your cart is currently empty</p>
          </PopoverBody>
        </UncontrolledPopover>
      </div>
  );
}

export default CartPopover;
