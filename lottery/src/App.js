//import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react'
import Navbar from './navbar';
import Main from'./main'

function App() {
  return (
   <Fragment>
    <Navbar/>
    <h1 className='welcomeStatement'>Welcome to The Lottery-App</h1>
    <Main/>
   </Fragment>
  );
}

export default App;
