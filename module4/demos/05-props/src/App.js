import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <React.Fragment>
    
    <Header name="Jane" color="purple"/>
    <Main greet="Hi"/>
    <Main greet="Yoz!!"/>

    <Sidebar greet="hellllllloooooo!"/>
   </React.Fragment>
  );
}

export default App;
