import React, { useState } from 'react';
import { Upload, Button, message, List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const LandingPage = () => {
  const [fileList, setFileList] = useState([]);
  const [results, setResults] = useState([]);

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
    <div style={{ padding: '20px' }}>
      <h1>G23 Capstone RI</h1>
      
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
    </div>
  );
};

export default LandingPage;