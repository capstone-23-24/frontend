const fs = require('fs');
const csv = require('csv-parser');



const { invoke_endpoint } = require('../api/axios')

// Path to your CSV file
const CSV_FILE_PATH = './Test_cases.csv';

// Function to send data to the API

// Function to read CSV and send data from the first column
const processCSV = () => {
    fs.createReadStream(CSV_FILE_PATH)
        .pipe(csv())
        .on('data', (row) => {
            // Assuming the first column has a header named 'Column1'
            invoke_endpoint(row['Column1']);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });

        
};

// Call the function to start the process
processCSV();
