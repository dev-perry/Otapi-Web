import React, {useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {storage} from '../firebase.js';
import filler from '../assets/product_image_default.svg';

function ProductCard(props){
  const [imgsrc, setSrc] = useState(filler);
  const [redirect, setRedirect] = useState(false);
  const details = props.data;

  function navigate(e){
    console.log('Le click');
    setRedirect(true);
  }

  storage.child('thumbnails/'+props.id+'.png').getDownloadURL().then(
    function(url){
      setSrc(url);
    }
  );
  if(imgsrc){
    return(
      <div onClick={navigate}>
      <Card className="product-card">
        <CardImg className="product-image" src={imgsrc} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{details.name}</CardTitle>
          <CardSubtitle className="product-price">${details.price}</CardSubtitle>
        </CardBody>
        {redirect && <Redirect to={{
          pathname: '/product/' + props.id,
          state: {data: props.data}
        }}/>}
      </Card>
    </div>
    );
  }
};

export default ProductCard;
