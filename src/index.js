/*
<CHAPTER----1>


// Creating first React appln : START
import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting(){
//   return <h2>Hello, THIS IS FIRST REACT APP !</h2>
// }

function Greeting(){
  return <>
    <h2>Hello, THIS IS FIRST REACT APP !</h2>
    <h5>Hello, THIS IS FIRST REACT APP !</h5>
    <Comp1/>
    <Comp2/>
  </>
}
//passing component Comp1 as an element inside the Greeting component 
const Comp1 = () => <h2>Comp1!</h2>;
const Comp2 = () => {
  return <h2>comp2!</h2> ;
}

//const Greeting = <h2>Hellow World!</h2>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Greeting);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);


=====================================================
=====================================================

*/



import React from 'react';
import  ReactDOM  from 'react-dom/client';
import nameStandImg from './img/nameStand.jpg';
import './index.css';  //outline styling (css)
const Catalogue =()=>{
  return <div className='catalogue'>
    <h1>Let's create webPage for my small business!</h1>
    <Frames></Frames>
    <Frames></Frames>
  </div>
};

const Frames = () => {
  return(
    <section className='frame'>
      <Image></Image>
      <ProductName></ProductName>
      <ProductPrice></ProductPrice>
    </section>
  )
}
const ProductPrice = () => {
  return <h2>Price: 1000Rs</h2>
}
const ProductName = () => {
  return <h3 style={{color: "rgb(37, 29, 20)" ,fontSize:"1.25rem"}}>Name: 6 inch heart shape frame</h3>;
};
const Image =()=> {
  return (
    <img
    src={nameStandImg}
    alt='5inch_frame'
    width={400}
    height={300}
    />
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Catalogue/>);

