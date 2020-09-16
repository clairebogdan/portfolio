import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <Router>

      <Navbar />
      

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default App;
