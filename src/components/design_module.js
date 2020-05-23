import React from 'react';
import {
  Modal,
  Row,
  Col,
  Badge,
  Button
} from 'reactstrap';
import '../styles/design_module.css';
import filler from '../assets/product_image_default.svg';

function DesignModule(props) {

  return (
      <Modal className="design-window" size="lg" scrollable={true} backdrop="static" returnFocusAfterClose={false} isOpen={props.modal} toggle={props.toggle}>
          <Row className="no-gutters">
            <Col className="designer-preview" xs="8">
              <img src={filler} alt="Preview"/>
              <Button className="dmclosebtn" onClick={props.toggle}>X</Button>
            </Col>
            <Col className="designer-menu" xs="4">
              <h1>DESIGN<br/>TOOL</h1>
              <div>
              <Badge className="designer-menu-icon" pill>1</Badge> Media Link
              </div>
              <div className="design-menu-option">

              </div>
              <div>
              <Badge className="designer-menu-icon" pill>2</Badge> Media Style
              </div>
              <div className="design-menu-option">

              </div>
              <div>
              <Badge className="designer-menu-icon" pill>3</Badge> Color
              </div>
              <div className="design-menu-option">

              </div>
              <div>
              <Badge className="designer-menu-icon" pill>4</Badge> Size
              </div>
              <div className="design-menu-option">

              </div>
              <Button size="lg" className="addtocartbtn">ADD TO CART</Button>
            </Col>
          </Row>
    </Modal>
);
}

export default DesignModule;
