import React, { Component } from 'react'

import { Route, Routes } from 'react-router-dom';

import './App.css';

//Header
import Header from './Componens/Header/Header';
import './Componens/Header/Styles/Styles.css'

//Content
import Content from './Componens/Content/Content';
import BLOG from './Componens/Content/BLOG';
import './Componens/Content/StyleContent/StyleContent.css';
import PORTFOLIO from './Componens/Content/PORTFOLIO';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/'>
              <Route index element={<Content />} />
              <Route path="/blog" element={<BLOG />} />
              <Route path="/portfolio" element={<PORTFOLIO />} />
            </Route>
          </Routes>
        </div>
      </React.Fragment>


    );
  }

}

export default App;
