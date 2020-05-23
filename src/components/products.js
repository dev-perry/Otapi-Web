import React, {useState, useEffect} from 'react';
import {CardColumns} from 'reactstrap';
import {database} from '../firebase.js';
import ProductCard from './product_card.js';
import LoadAnimation from './load_animation.js';

import '../styles/products.css';

function Products(props) {
  const category = props.category;
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    database.collection(category).where("stocked","==",true).get().then(
      (querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        setProducts([...products,{id: doc.id, data: doc.data()}]);
      });
    })
    .catch(function(error){
      console.log("Error getting documents:", error);
    })
  },[]
  );

  if(products.length === 0){
    return <LoadAnimation/>;
  }else{
    return(
      <div className="product-body">
        <CardColumns>
          {products.map(item=>(
            <ProductCard category={category} key={item} id={item.id} data={item.data}/>
          ))}
        </CardColumns>
      </div>
    );
  }
}

export default Products;
