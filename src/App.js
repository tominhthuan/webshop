import React, { Component } from 'react'

import Header from './Componens/Header/Header';
import Content from './Componens/Content/Content';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import './Componens/Header/Styles/Styles.css'
import './Componens/Content/StyleContent/StyleContent.css'
import HOME from './Componens/HOME';
import BLOG from './Componens/Content/BLOG';
import PORTFOLIO from './Componens/PORTFOLIO';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/'>
              <Route index element={<Content/>} />
              <Route path="/blog" element={<BLOG />} />
              <Route path="/portfolio" element={<PORTFOLIO/>} />
            </Route>
          </Routes>
        </div>
      </React.Fragment>


    );
  }

}

export default App;
