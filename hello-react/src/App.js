//import logo from "./logo.svg";
//import React from "react";
import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSamp';
import IterationSample from './IterationSample';

// 함수형
// function App() {
//   const name = "리액트";
//   // const style = {
//   //   backgroundColor: "black",
//   //   color: "aqua",
//   //   FontSize: "48px",
//   //   fontWeight: "bold",
//   //   padding: 16
//   // };
//   //return <div>{name === "리액트" && <h1>리액트 입니다.</h1>}</div>;
//   <div>
//     return <div className="react">{name}</div>;
//           <h1>들여쓰기가 이상한</h1>
//         <h2>코드</h2>
//   <p>입니다.</p>
//   </div>;
// }

// //
// class App extends Component {
//   render() {
//     const name = 'react';
//     return;
//     <div className="react">{name}</div>;
//   }
// }

// const App = () => {
//   return <MyComponent name="sagwa" favoriteNumber={1}>리액트</MyComponent>;
// };

const App = () => {
  return <IterationSample />;
};

export default App;
