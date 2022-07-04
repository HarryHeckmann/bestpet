import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Test from './Components/Test/Test';
import Landing from './Components/Landing/Landing';
import Profile from './Components/Profile/Profile';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/" element={<Landing/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
