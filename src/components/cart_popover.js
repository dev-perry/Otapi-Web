import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../styles/cart_popover.css';
import cart_icon from '../assets/cart_icon.svg';

function CartPopover(props){

  return (
    <div className="cart">
        <Button color="link" id="PopoverFocus" type="button" className="cart-button">
          <img className="cart-icon" alt="Cart" src={cart_icon}/>
        </Button>
        <UncontrolledPopover trigger="legacy" placement="left" target="PopoverFocus">
          <PopoverHeader>Cart</PopoverHeader>
          <PopoverBody>Your cart is currently empty</PopoverBody>
        </UncontrolledPopover>
      </div>
  );
}

export default CartPopover;
