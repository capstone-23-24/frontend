import React, { useState, useEffect } from 'react';
import { Upload, Button, message, List, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SearchBar from '../../components/SearchBar'
import SearchList from '../../components/SearchList'
import Results from '../../components/Results/Results'

const LandingPage = () => {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [fileList, setFileList] = useState([]);
  const [results, setResults] = useState([]);
  
  //for the title  
  useEffect(() => {
    document.title = "About Page";  
  }, []);
  // useEffect(() => {
  //   getPosts().then(json => {
  //     setPosts(json)
  //     setSearchResults(json)
  //   })
  // }, [])

  const props = {
    beforeUpload: file => {
      setFileList([...fileList, file]);
      return false;
    },
  };

  const handleUpload = () => {
    // PDF processing logic here
    // For demo purposes, just show a success message
    message.success('PDFs uploaded and processing started!');
    
    // Simulate processing result data
    const processedResults = fileList.map(file => ({
      name: file.name,
      status: 'Processed Successfully',
      // Add more result data as needed
    }));

    setResults(processedResults);
  };

  return (
    <div id="container" style={{ padding: '20px' }}>
      <SearchBar/>
      {/* <h1>G23 Capstone RI</h1> */}
      
      <Upload {...props} fileList={fileList}>
        <Button icon={<UploadOutlined />}>Select PDFs to Upload</Button>
      </Upload>
      
      <Button type="primary" onClick={handleUpload} style={{ marginTop: '16px' }}>
        Start Processing
      </Button>

      {results.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Processing Results</h2>
          <List
            dataSource={results}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  description={item.status}
                />
              </List.Item>
            )}
          />
        </div>
      )}

      <SearchList searchResults={searchResults} />
      <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/>
    </div>
  );
};

export default LandingPage;
