import './components/style.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    let pageSize = 5;
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News pageSize={pageSize} country="in" category="general" titleCat="General" />}></Route>
            <Route exact path='/business' element={<News pageSize={pageSize} key="business" country="in" category="business" titleCat="Business" />} />
            <Route exact path='/entertainment' element={<News pageSize={pageSize} key="entertainment" country="in" category="entertainment" titleCat="Entertainment" />} />
            <Route exact path='/health' element={<News pageSize={pageSize} key="health" country="in" category="health" titleCat="Health" />} />
            <Route exact path='/science' element={<News pageSize={pageSize} key="science" country="in" category="science" titleCat="Science" />} />
            <Route exact path='/sports' element={<News pageSize={pageSize} key="sports" country="in" category="sports" titleCat="Sports" />} />
            <Route exact path='/technology' element={<News pageSize={pageSize} key="technology" country="in" category="technology" titleCat="Technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}