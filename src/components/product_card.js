import React, {useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {storage} from '../firebase.js';
import filler from '../assets/product_image_default.svg';

function ProductCard(props){
  const [imgsrc, setSrc] = useState(filler);
  const details = props.data;

  storage.child('thumbnails/'+props.id+'.png').getDownloadURL().then(
    function(url){
      setSrc(url);
    }
  );
  if(imgsrc )
  return(
    <Card className="product-card">
      <CardImg className="product-image" src={imgsrc} top width="100%" alt="Product image"/>
      <CardBody className="product-desc">
        <CardTitle className="product-name">{details.name}</CardTitle>
        <CardSubtitle className="product-price">${details.price}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
