import './App.css';
import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
// import SearchBar from './components/SearchBar'
// import SearchList from './components/SearchList'
// import Results from './components/Results/Results';

function App() {
  
  return (
    <body>
      <Router>
        <Routes>
          {/* <Route path="/" element={authenticated ? <LandingPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated} />} /> */}

          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>
      </Router>
    </body>
    
  );
}

export default App;
