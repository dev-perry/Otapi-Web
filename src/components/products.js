import React from 'react';
import {
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import '../styles/products.css';
import filler from '../assets/product_image_default.svg';

function Products(props) {
  var category = props.category;
  var price = 9.99;
  return (
  <div className="product-body">
    <CardColumns>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-image" src={filler} top width="100%" alt="Product image"/>
        <CardBody className="product-desc">
          <CardTitle className="product-name">{category} product</CardTitle>
          <CardSubtitle className="product-price">${price}</CardSubtitle>
        </CardBody>
      </Card>
    </CardColumns>
  </div>
);
}

export default Products;
