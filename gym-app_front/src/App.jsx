import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg'
import './AppStyle/App.css';

// components
import MainHeader from './components/mainheader/header';
import HomePage from './components/homepage/home';
import MainFooter from './components/mainfooter/footer';
import LogIn from './components/login/login';

function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        {/* <Route path='/contact' element={<HomePage/>} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />

      </Routes>
      <MainFooter />
    </Router>
  )
}

export default App
