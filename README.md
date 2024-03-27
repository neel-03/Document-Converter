# CSV to JSON and JSON to CSV Converter

## Introduction

This project is a simple web application that allows users to convert data between CSV (Comma-Separated Values) and JSON (JavaScript Object Notation) formats. It provides a user-friendly interface for uploading files, converting them, and downloading the converted data.

## Features

### 1. File Upload
- Users can upload CSV or JSON files to the application.
- Supported file formats: `.csv` and `.json`.

### 2. Conversion Options
- Users can choose between converting CSV to JSON or JSON to CSV.
- The application validates the uploaded files and ensures they meet the required format for conversion.

### 3. Conversion Process
- Upon selecting the conversion type and uploading a file, the application converts the data accordingly.
- Conversion is done using serverless functions hosted on Azure.

### 4. Preview Converted Data
- Users can preview the converted data before downloading it.
- The application displays the converted data in a readable format.

### 5. Download Converted Data
- Users can download the converted data in the desired format (CSV or JSON).

## Screenshots

![Initial UI](https://github.com/neel-03/Document-Converter/assets/96440861/899025c8-4f2a-4de7-baf1-e8aad1cb0ac7)
![Uploading invalid JSON file](https://github.com/neel-03/Document-Converter/assets/96440861/18a28a46-efa2-4a32-aacd-28476fc88a17)
![Uploading invalid CSV file](https://github.com/neel-03/Document-Converter/assets/96440861/0d7aab00-47f8-4c6b-9f74-3a9d65398796)
![Uploading valid JSON file](https://github.com/neel-03/Document-Converter/assets/96440861/1c1822d7-edd9-4349-a352-c25744721e34)
![Uploading valid CSV file](https://github.com/neel-03/Document-Converter/assets/96440861/d8c66c59-e8d8-431e-b6b2-65a053e50727)
![JSON to CSV output](https://github.com/neel-03/Document-Converter/assets/96440861/5d3e405c-56a6-4144-b2c4-f2e4c9bb7c2b)
![CSV to JSON output](https://github.com/neel-03/Document-Converter/assets/96440861/3a071eda-07d5-4065-9532-b35179b360cb)
![Azure serverless function](https://github.com/neel-03/Document-Converter/assets/96440861/97943e43-b8b9-4882-836c-4d1b14ef61d2)
![Trigger on HTTP-POST request](https://github.com/neel-03/Document-Converter/assets/96440861/a803dfe8-14d0-44f0-b901-d133c53e0ee6)


## Usage

### Steps to Use
1. Open the application in a web browser.
2. Choose the conversion type (CSV to JSON or JSON to CSV)(make sure it does not support multi-level JSON objects).
3. Upload the file you want to convert.
4. Click the "Convert" button.
5. Preview the converted data.
6. Click the "Download" button to save the converted data to your device.

## Technologies Used

- React.js: for building Frontend.
- Azure Functions: Serverless computing service used for data conversion.
- CSS: Styling the user interface.

## Developed By

- [Neel Vaghasiya](https://www.linkedin.com/in/vneel/)

## Vercel Deployment

[Deployed on Vercel](https://document-converter.vercel.app/)
