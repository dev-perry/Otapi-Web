import React, {useState, useEffect} from 'react';
import { Media } from 'reactstrap';

 function ProductView(props){
   const [data, setData] = useState({});

   useEffect(()=>{
     setData(props.location.state.data)
   }, [])

   return(
     <div className="view-body">
       <Media>
         <Media left>
           <Media object data-src="https://via.placeholder.com/150" />
         </Media>
         <Media body>
           <Media heading>
             Unisex Heavy Blend Hoodie
           </Media>
           <div className="product-price">${data.price}</div>
           <div className="product-desc">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor vitae purus
             faucibus ornare suspendisse.
             Magna etiam tempor orci eu lobortis elementum.
           </div>
         </Media>
       </Media>
     </div>
   )
 }

 export default ProductView;
