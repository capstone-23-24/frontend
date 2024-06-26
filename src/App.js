import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './components/pages/LoginPage'
import LandingPage from './components/pages/LandingPage';

const { Header } = Layout;

function App() {
  return (
    <body>
      <Header className='main-header'>
        <h1>Demo Search</h1><img src="/logo.jpg" alt="Logo" style={{ width: '10vh', height: '10vh' }}/>
      </Header>
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
