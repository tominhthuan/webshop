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
import PageImage from './Componens/Content/PageImage';

//footer
import Footer from './Componens/Footer/Footer';
import './Componens/Footer/css/Footer.css';

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
              <Route path="/pageimage" element={<PageImage />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </React.Fragment>


    );
  }

}

export default App;
