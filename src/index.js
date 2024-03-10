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

/*

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
  );
}

*/


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

/*
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



*/
//=====================================PROPS ENDS===========================



//what if we want to display 100 books or more ? , created 100 book objects with title,imh,author,etc.....thn ... but we can't write 100 times book comp inside bookList comp and pass props each time 
// Soltuion :::  LIST 
//
/*
import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';

//SIMPLE LIST

//creating array
// const bookTitle = ['Atomic Habits','5am Club','Power of Habits','The Magic'];
// const newBookTitle =bookTitle.map((title)=>{
//   return <h1>{title}</h1>
// });

// const BookList =()=> {
// return(
//   <div>{newBookTitle}</div>
// );
// }

//steps , 
//1st create db(books obj) ,
//2nd in main comp we wrote map functn,for each book we create -we retuned the book comp  n passed props inside it by passing book=book 
//3rd - in book comp , pass props 
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

]

explaination for how this code works ::
1st comes to booklist comp , we r useing map function to books obj . 
when we are doing it , we get 1 book obj, to every obj we are returing book comp.
for 1st book , we r returning book comp , in which we aare passing all the detail, when it does it -comes to book components n destructures all elements n shows on screen . 
 

function BookList (){
  return(
    <section className='bookList'>
      {books.map((book,index)=>{
        //index or u can use id property in books obj 
        // return(<Book book={book}/>)
        //for key , we were getting warning 
        return(<Book {...book} key={index}/>)
      })}
    </section>
  )
}

// const Book =(props)=>{
//   console.log(props);
// }
const Book = (props) => {
  const {img,author,title}=props;  // grab img,auhor,title from props.book
  return(
    <div>
      <img src={img} alt ="img"/>
      <h2>{author}</h2>
      <h2>{title}</h2>
    </div>
  )
 }



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>)
*/

/*

//Events basics

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
        //index or u can use id property in books obj 
        // return(<Book book={book}/>)
        //for key , we were getting warning 
        return(<Book {...book} key={index}/>)
      })}
    </section>
  );
}
//simple onClick
const Book = (props) => {
  const {img,author,title}=props;  // grab img,auhor,title from props.book
  const onclick =()=>{
    //console.log(e);
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

//COMPLETION OF CHAP-2
*/