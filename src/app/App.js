import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import AppBar from '../component/appBar'
import Home from '../section/home'
import Feature from '../section/feature'
import About from '../section/about'
import Experience from '../section/experience'
import Project from '../section/project'
import styled from "styled-components";

// const newHome = styled.Home`
//   height: 4.6rem;
// `
class App extends Component {
  render() {

    return (
      <div>
        <AppBar />
        <Home />
        <Feature />
        <About />
        <Experience />
        <Project />
      </div>
    )
  }
}

export default App;
