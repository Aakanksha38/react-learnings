import React, { useState } from 'react'
import  listOfProducts  from './products';

const HomePage = () => {
  const [products , setProducts] = useState(listOfProducts);
  //WHY productItem  was showing as array instead of individual object
  //because of useState([listOfProducts]) , listOfProducts is array n 
  /*you are wrapping listOfProducts into array again , 
  creating it as nested array 
  You are initializing the state with [listOfProducts], which wraps listOfProducts in an additional array. 
  If listOfProducts is already an array, this will create a nested array, 
  which is likely not what you intended.
  console.log(products)*/
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available</p>;
  }  // to check array called products contain any elements or not -- it will check whether its an arraay or not thn it will check for length
  const removeAllProducts = () =>{
    if(products.length !== 0){
      window.confirm(`Are you sure ,you want to remove all the products?`);
    setProducts([]);
    }
    else {
      alert("No products there to remove!");
    }
    
  }
  const addToCartBtn = (pName)=>{
    window.confirm(`Are you sure , ${pName} will be added o your cart.`);
  }
  return (
    <>
     {products && products.map((productItem,index)=>{
        console.log('Product item:', productItem); // Log the entire productItem object
        //console.log(product[index].pName); -> getting console print here , this is wrong , this should not happen coz product is individual object not array
        const {pImg,pName,pPrice} =productItem;
        console.log('Product name and price:', pName, pPrice); // Log destructured properties
        return(
          <ul key={index} className='homePage'>
              <img src={pImg} alt='kii' />
              <li>{pName}</li>
              <li>{pPrice}</li>
              <button className='btn' onClick={()=>{addToCartBtn(pName)}}>Add to cart</button>
          </ul>
        )
      })}
      <button onClick={()=>{removeAllProducts()}}>Clear All Products</button>
    </>
  );
}


export default HomePage;



/*
import React, { useState} from 'react';
import listOfProducts from '../products';
const ProductList = () => {
  const [products, setProducts] = useState(listOfProducts); // Initialize products as null
  
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available</p>;
  }

  console.log('Products array:', products); // Log the entire products array

  return (
    <div>
      {products.map((productItem, index) => {
        
        const {pImg, pName, pPrice } = productItem;
        

        return (
          <div key={index}>
            <img src={pImg} alt={pImg} />
            <p>{pName}</p>
            <p>{pPrice}</p>
            <button>Add to cart</button>
          </div>
        );
      })}
      <button onClick={()=>setProducts([])}>btnnnn</button>
    </div>
  );
};

export default ProductList;
*/