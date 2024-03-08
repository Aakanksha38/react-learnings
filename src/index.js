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


/*
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
*/


// Chapter =====2 

// --->> how we can define component in 2 ways , writing style(inside 2 curly braces ) n js(inside the curly braces) under 
/*
import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';

//this is also component 
function BookList  () {
  return (
    <section>
    <h1>Chapter 2</h1>
    <Book></Book>
    </section>
  )
}
//this is also component 
const author= 'Daniel Kahneman'; // global variable
const Book =()=> {
  const title = 'Thinking, fast and slow'; //local variable
  return(
    <article className='article'>
      <img className='photo'
        src= 'https://tse1.mm.bing.net/th?id=OIP.fIgWbZqX54jc0kQHnZ2UTwAAAA&pid=Api&P=0&h=180'
        alt= 'Thinking, fast and slow'
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>Price: {100+50}</p>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>)
*/


import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';


//this is also component 
const firstBook={
  img : "https://tse1.mm.bing.net/th?id=OIP.fIgWbZqX54jc0kQHnZ2UTwAAAA&pid=Api&P=0&h=180",
  author: "Daniel Kahneman",
  title:"Thinking, fast and slow"
  }
  const secondBook={
    img :"https://tse3.mm.bing.net/th?id=OIP.NZ3INRcCAJ1XsXApbBJTHgHaLX&pid=Api&P=0&h=180",
    author: "robin Sharma",
    title:"The 5am club"
    }
  const checkAndLogical = true;
  
//this is also component 
function BookList  () {
  //what if iwant to pass more info to book ele? =>
  return (
    <section className='bookList'>
    
    <Book 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      publishedYear ="2009" 
      price="200">
        <p>passing more info to this comp at children</p>
      </Book>
    <Book img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
      publishedYear ="2018"/>
      <div>
        {checkAndLogical  && <Book title="third book"/>}
      </div>
      
    </section>
  )
}

//access props- 1
/*
const Book =(props)=> {
  console.log(props);
  console.log(props.publishedYear);
  //const title = 'Thinking, fast and slow'; //local variable
  return(
    <article className='article'>
      
      <img src={props.img} alt=''/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.publishedYear}</p>
    </article>
  )
}

*/

/*
// access props- 2nd way/ DESTRUCTING PROPS
const Book =(props) => {
  //grouping all the props into curly braces n storing into the variable called props
  const {img,title,author,publishedYear} = props;
  return(
    <article className='article'>
      
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{publishedYear}</p>
    </article>
  );
  
}
*/

//3rd way 
//directly pass the props to function's parameter

//use that children
const Book =({img,title,author,publishedYear,children}) => {
  return(
    <article className='book'>
      
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{publishedYear}</p>
      {children}
    </article>
  );
  
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>)