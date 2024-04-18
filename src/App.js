
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,//insted of Switch
  Route,
} from "react-router-dom";


export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    mode: 'light'
  };
}

toggleMode = () => {
  this.setState((prevState) => ({
    mode: prevState.mode === 'light' ? 'dark' : 'light',
  }));
};

  render() {   
    const {mode} = this.state;
    return (
      
        <Router>
          <div>
        <Navbar mode={mode} toggleMode={this.toggleMode} />
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" mode={mode} />} />
        <Route exact path="/home" element={<News key="general" pageSize={this.pageSize} country='in' category='general' mode={mode}></News>}/> 
        {/* <Route exact path="/general" element={<News pageSize={this.pageSize} country='in' category='general' mode={mode}></News>}/> */}
        <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country='in' category='business' mode={mode}></News>}/>      
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' mode={mode}></News>}/>      
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country='in' category='health' mode={mode}></News>}/>      
        <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country='in' category='science' mode={mode}></News>}/>      
        <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country='in' category='sports' mode={mode}></News>}/>      
        <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country='in' category='technology' mode={mode}></News>}/>
       

        </Routes>

        </div>
      </Router>
      
    )

  }
}
