import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/LoginPage'
import LandingPage from './components/pages/LandingPage';


function App() {
  return (
    <body>
      <Router>
        <Routes>
          {/* Pass onLoginSuccess to the Login component */}
          <Route exact path="/home" element={<LandingPage />}  />
          <Route exact path="/" element={<Login/>} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
