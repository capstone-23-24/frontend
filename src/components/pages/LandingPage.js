import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { invoke_endpoint } from '../../api/axios'
import Papa from 'papaparse'

const { Dragger } = Upload;

const LandingPage = () => {

  const [fileList, setFileList] = useState([]);
  const [ textList, setTextList ] = useState();

  //for the title  
  useEffect(() => {
    document.title = "DemoSearch";  
  }, []);

  const props = {
    beforeUpload: (file) => {
      const isCSV = file.type === 'text/csv' || file.name.endsWith('.csv');
      if (!isCSV) {
        message.error('You can only upload CSV files!');
        return Upload.LIST_IGNORE;
      }

      Papa.parse(file, {
        complete: (result) => {
          console.log('Parsed CSV data:', result.data);
          result.data.forEach((row) => {
            setTextList((prevList) => [...prevList, { text: row[0] }]);
          });
        },
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true,
      });

      // To prevent adding to list since we're handling files manually
      return false;
    },
    onRemove: (file) => {
      setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
    },
    fileList,
  };

  const handleFileProcess = () => {
    // Assuming `textList` is available in your context or state
    textList.forEach((text) => {
      invoke_endpoint(text);
    });

    // Emptying text list array to minimize memory usage
    setTextList([]);

    // Resetting the fileList to clear the dragger
    setFileList([]);
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
          <Upload.Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag CSV file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
          
          
          <Button type="primary" onClick={handleFileProcess} style={{ marginTop: '16px' }}>
            Start Processing
          </Button> 
          
          
        </div>
      </div>

      {/* <Results caseTitle={"Sample Case"} predictedTags={["tag1", "tag2", "tag3"]} caseInformation={"Sample Case Information"}/> */}
    </div>
  );
};

export default LandingPage;
