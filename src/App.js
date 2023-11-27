import logo from './logo.svg';
import './App.css';
import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar'
// import ListPage from './components/ListPage'

function App() {
  // for the title
  useEffect(() => {
    document.title = "About Page";  
  }, []);
  // for the search bar
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])

  return (
    <>
      <div className="App">
        <h1>Demo Search</h1>
      </div>
      <SearchBar posts={posts} setSearchResults={setSearchResults} /> 
      <LandingPage/>
      {/* <ListPage searchResults={searchResults} /> */}
    </>
  );
}

export default App;
