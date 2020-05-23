import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {storage} from '../firebase.js';
import DesignModule from './design_module.js';
import filler from '../assets/F7F7F7-0.8.png';
import '../styles/product_view.css';

 function ProductView(props){
   const [data, setData] = useState(props.location.state.data);
   const [modal, setModal] = useState(false);
   const id = props.match.params.id;
   const [src, setSrc] = useState(filler);
   const descList = data.desc.split("*");

   storage.child('thumbnails/'+id+'.png').getDownloadURL().then(
       function(url){
         setSrc(url);
       }
     );

  function toggle(){
    setModal(!modal)
  }

  return(
    <>
    <DesignModule modal={modal}  toggle={toggle}/>
    <div className="prodview-body">
      <Container>
        <Row>
          <Col xs="6">
              <img alt="Product" src={src}/>
          </Col>
          <Col xs="6">
            <div className="prodview-overview">
              <div className="prodview-name">{data.name}</div>
              <div className="prodview-price">${data.price}</div>
              <div className="prodview-desc">
                <ul className="prodview-desc-list">
                  {
                    descList.map((item)=> <li key={item}>{item}</li>)
                  }
                </ul>
              </div>
              <div className="prodview-btn-container">
                <Button size="lg" className="prodview-button" onClick={toggle}>CUSTOMIZE</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

 export default ProductView;
