

//-------------------------TASK- 1----------------------------//

/*
import React from 'react';
import  ReactDOM  from 'react-dom/client';

const books=[
  {
  img : "https://m.media-amazon.com/images/I/71yu8CAKbgL._AC_UL480_FMwebp_QL65_.jpg",
  author: "Robin Sharma",
  title:"Who will cry when you will die"
  },
  {
    img : "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UL480_FMwebp_QL65_.jpg",
    author: "Joseph Nguyen",
    title:"Don't believe everything you think"
    },
    {
      //id:3
      img : "https://m.media-amazon.com/images/I/61-hMfd7NGL._AC_UL480_FMwebp_QL65_.jpg",
      author: "Morgan Housel",
      title:"Psychology of Money"
      }

];
function BookList (){
  return(
    <section className='bookList'>
      {books.map((book,index)=>{
        return(<Book {...book} key={index}/>)
      })}
    </section>
  );
}

const Book = (props) => {
  const {img,author,title}=props;  // grab img,auhor,title from props.book
  const onclick =()=>{
    alert("Hi, Book is availble to place your order");
  }
  const onHandler =(title)=>{
    console.log(`Book with title ${title} has been added to your cart.`);
    window.confirm(`Are you sure ,Book with title ${title} will be added o your cart.`);
  }
  return(
    <div className='book'>
      <img src={img} alt ="img" onClick={()=> console.log("title:",title)}/>
      <h4 >Author : {author}</h4>
      <h1 onClick={()=> console.log(title)}>Title: {title}</h1>
      <button onClick={onclick}>Check Book Availability</button>
      <button onClick={()=>{onHandler(title)}}>Add to Cart</button>
    </div>
  );
 }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>)

*/
//-------------------------TASK-1 COMPLETE--------------------------///

//start wth task assigned 


/*
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import nameStandImg from './img/nameStand.jpg';
import floralPendent from './img/floralPendent.jpg';
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
*/

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App tab='home' />)

