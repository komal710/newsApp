
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,//insted of Switch
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


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
apiKey =process.env.REACT_APP_NEWS_API
// process.env.REACT_APP_NEWS_API
state={
  progress: 0
}

setProgress = (progress) =>{
  this.setState({progress: progress})
}
  render() {   
    const {mode} = this.state;
    return (
      <div>
        <Router>
         <LoadingBar height={3} color='#14e0dd' progress = {this.state.progress}/>
        <Navbar mode={mode} toggleMode={this.toggleMode} />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general" mode={mode} />} />
        <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country='in' category='general' mode={mode}></News>}/> 
        {/* <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country='in' category='general' mode={mode}></News>}/> */}
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country='in' category='business' mode={mode}></News>}/>      
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' mode={mode}></News>}/>      
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country='in' category='health' mode={mode}></News>}/>      
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country='in' category='science' mode={mode}></News>}/>      
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country='in' category='sports' mode={mode}></News>}/>      
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country='in' category='technology' mode={mode}></News>}/>
       

        </Routes>

        
      </Router>
      </div>
    )

  }
}
