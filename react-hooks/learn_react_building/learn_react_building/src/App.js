import React from 'react';
import './App.css';
import data from './components/back/Data/Data';
import Header from './components/front/Hearder/Header';
import Routes from './components/front/Routes/Routes';
import { BrowserRouter as Router, } from 'react-router-dom';

const App = () => {

const {productItems} = data;
  return (
    <Router>
      <Header/>
      <Routes/>
    </Router>
  );
}

export default App;
