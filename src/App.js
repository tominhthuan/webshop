import React, { Component } from 'react'

import Header from './Componens/Header/Header';
import Content from './Componens/Content/Content';

import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';

import './App.css';
import './Componens/Header/Styles/Styles.css'
import './Componens/Content/StyleContent/StyleContent.css'
import HOME from './Componens/HOME';
import BLOG from './Componens/BLOG';
import PORTFOLIO from './Componens/PORTFOLIO';

class App extends Component {
  render(){
    return (
      
      <Router>
        <div className="App">
          <Header>
              <Route exact path='/'  component={HOME} />
              <Route path="/blog/" component={BLOG} />
              <Route path="/portfolio" component={PORTFOLIO} />
          </Header>
            
        </div>
        <Content/>
      </Router>
    
    );
  }
  
}

export default App;
