import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Upload, Button, message, List} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { invoke_endpoint } from '../../api/axios'
import Papa from 'papaparse'

const { Dragger } = Upload;

const LandingPage = () => {

  
  
  //for the title  
  useEffect(() => {
    document.title = "DemoSearch";  
  }, []);

  const props = {
    beforeUpload: file => {
      const isCSV = file.type === 'text/csv' || file.name.endsWith('.csv');
      if (!isCSV) {
        message.error('You can only upload CSV files!');
        return Upload.LIST_IGNORE;
      }
      
    
      // Directly parse the file here
      Papa.parse(file, {
        complete: (result) => {
          console.log('Parsed CSV data:', result.data);
          // For each row in the CSV, call your function
          result.data.forEach(row => {
            // console.log(row[0])
            invoke_endpoint("", {"text":  row[0]}, "");
          });
        },
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true,
      });
    
      // Prevent upload since you're handling it
      return false;
    },
  };

  // Function to handle file input change and parse the CSV
  // const handleFileChange = (event) => {
  
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   Papa.parse(file, {
  //     complete: (result) => {
  //       console.log('Parsed CSV data:', result.data);
  //       // For each row in the CSV, call handleRowData
  //       result.data.forEach(row => {
  //         invoke_endpoint("", row,"");
  //       });
  //     },
  //     header: false, // Assuming CSV has header. Set to false if not
  //     dynamicTyping: true,
  //     skipEmptyLines: true,
  //   });
  // };

    // let body = {'text': "I am Raj, I am from India, I am 22 years old."}
    // invoke_endpoint("", body, "")


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
          
          {/* <Button type="primary" onClick={handleFileChange} style={{ marginTop: '16px' }}>
            Start Processing
          </Button> */}
          
          {/* <input type="file" onChange={handleFileChange} /> */}
        </div>
      </div>

      {/* <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/> */}
    </div>
  );
};

export default LandingPage;
