
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,//insted of Switch
//   Route,
// } from "react-router-dom";


export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    mode: 'light'
  }
}

toggleMode = () => {
  this.setState((prevState) => ({
    mode: prevState.mode === 'light' ? 'dark' : 'light',
  }));
};

  render() {   

    const{mode} = this.state;
    return (
      
        <div>
         
        <Navbar mode={mode} toggleMode={this.toggleMode}></Navbar>
        <News pageSize={this.pageSize} country='in' category='sports' mode={this.state.mode}></News>      
      
      </div>
      
    )
  }
}
