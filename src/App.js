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
  // for the title
  // useEffect(() => {
  //   document.title = "About Page";  
  // }, []);
  // // for the search bar
  // const [posts, setPosts] = useState([])
  // const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   getPosts().then(json => {
  //     setPosts(json)
  //     setSearchResults(json)
  //   })
  // }, [])

  // console.log(searchResults); // can be removed later

  return (
    <body>
      <Router>
        <Routes>
          {/* <Route path="/" element={authenticated ? <LandingPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated} />} /> */}

          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>


        {/* <SearchBar posts={posts} setSearchResults={setSearchResults} />  */}
        {/**<LandingPage> */}
        {/* <SearchList searchResults={searchResults} /> */}
        {/* <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/> */}
      </Router>
    </body>
    
  );
}

export default App;
