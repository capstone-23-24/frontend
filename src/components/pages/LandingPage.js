import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Upload, Button, message, List} from 'antd';
import { getPosts } from '../../api/services.js'
import { InboxOutlined } from '@ant-design/icons';
// import SearchBar from '../SearchBar'
import SearchList from '../SearchList'
import Results from '../Results/Results'

const { Dragger } = Upload;

const LandingPage = () => {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [fileList, setFileList] = useState([]);
  const [results, setResults] = useState([]);
  
  //for the title  
  useEffect(() => {
    document.title = "About Page";  
  }, []);
  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])

  const props = {
    beforeUpload: file => {
      // Check if the file type is CSV
      const isCSV = file.type === 'text/csv' || file.name.endsWith('.csv');

      if (!isCSV) {
        message.error('You can only upload CSV files!');
        return Upload.LIST_IGNORE;;
      }

      setFileList([...fileList, file]);
      return false;
    },
  };


  const handleUpload = () => {
    // PDF processing logic here
    // For demo purposes, just show a success message
    message.success("CSV's uploaded and processing started!");
    
    // Simulate processing result data
    const processedResults = fileList.map(file => ({
      name: file.name,
      status: 'Processed Successfully',
      // Add more result data as needed
    }));

    setResults(processedResults);
    console.log(posts);
    console.log(fileList)
    console.log(results)
  };

  return (
    <div id="container" style={{ padding: '20px' }}>
      {/* <SearchBar/> */}
      {/* <h1>G23 Capstone RI</h1> */}
      
      <div class="form-container">
        <div class="upload-form">
          {/* <Upload {...props} fileList={fileList}>
            <Button icon={<UploadOutlined />}>Select PDFs to Upload</Button>
          </Upload> */}
          <h3>Upload Your CSV Document Here</h3>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag CSV file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
          
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
        </div>
      </div>

      <SearchList searchResults={searchResults} />
      <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/>
    </div>
  );
};

export default LandingPage;
