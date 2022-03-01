import React from 'react'

import Header from './Header';
import Footer from './Footer';

import './App.css';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
    <>
    <Header/>
    <Content/>
    <Footer/>

    </>
    );
  }
}

export default App;
