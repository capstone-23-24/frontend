import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Upload, Button, message, List} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import Results from '../Results/Results'
import { invoke_endpoint } from '../../api/axios'

const { Dragger } = Upload;

const LandingPage = () => {

  const [fileList, setFileList] = useState([]);
  const [results, setResults] = useState([]);
  
  //for the title  
  useEffect(() => {
    document.title = "DemoSearch";  
  }, []);

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
    // // PDF processing logic here
    // // For demo purposes, just show a success message
    // message.success("CSV's uploaded and processing started!");
    
    // // Simulate processing result data
    // const processedResults = fileList.map(file => ({
    //   name: file.name,
    //   status: 'Processed Successfully',
    //   // Add more result data as needed
    // }));

    // setResults(processedResults);
    // console.log(fileList)
    // console.log(results)
    let body = {'text': "I am Raj, I am from India, I am 22 years old."}
    invoke_endpoint("", body, "")

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
          
        </div>
      </div>

      <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/>
    </div>
  );
};

export default LandingPage;
