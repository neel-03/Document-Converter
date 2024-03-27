import React, { useState, useEffect } from "react";
import { IoMdSwap, IoMdCodeDownload } from "react-icons/io";
import axios from "axios";
import { displaySuccess, displayError } from "./toastFunctions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./App.css";

const App = () => {
  const [json, setJson] = useState(null);
  const [csv, setCsv] = useState(null);
  const [data, setData] = useState(false);
  const [conversionType, setConversionType] = useState("jsonToCsv");
  const [waitFile, setWaitFile] = useState(true);
  const [waitData, setWaitData] = useState(true);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileText = event.target.result;
      let isValid = false;
      if (conversionType === "jsonToCsv") {
        try {
          JSON.parse(fileText);
          isValid = true;
        } catch (err) {
          displayError("Invalid JSON format.");
        }
      } else {
        if (fileText.includes(",")) {
          isValid = true;
        } else {
          displayError("Invalid CSV format.");
        }
      }
      if (isValid) {
        if (conversionType === "jsonToCsv") {
          setJson(fileText);
          displaySuccess("Uploaded file is valid JSON file.");
        } else {
          setCsv(fileText);
          displaySuccess("Uploaded file is valid CSV file.");
        }
        setWaitFile(false);
      }
      console.log("text", fileText);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    console.log("json", json);
    console.log("csv", csv);
  }, [json, csv]);

  const handleConvert = async () => {
    try {
      if (conversionType === "jsonToCsv") {
        const csvData = await convertJsonToCsv(json);
        setCsv(csvData);
      } else {
        const jsonData = await convertCsvToJson(csv);
        setJson(jsonData);
      }
      setData(true);
      setWaitData(false);
    } catch (error) {
      displayError("Error occurred during conversion.");
    }
  };

  const convertJsonToCsv = async (json) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_MY_SERVERLESS_FUNCTION}`,
      {
        data: json,
        conversionType: "jsonToCsv",
      }
    );
    return data;
  };

  const convertCsvToJson = async (csv) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_MY_SERVERLESS_FUNCTION}`,
      {
        data: csv,
        conversionType: "csvToJson",
      }
    );
    return data;
  };

  const handleSwapConversion = () => {
    setConversionType(
      conversionType === "jsonToCsv" ? "csvToJson" : "jsonToCsv"
    );
    setJson(null);
    setCsv(null);
    setData(false);
    setWaitData(true);
    setWaitFile(true);
  };

  const handleDownload = () => {
    const dataToDownload = conversionType === "jsonToCsv" ? csv : json;
    const blob = new Blob([dataToDownload], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      conversionType === "jsonToCsv"
        ? "Converted CSV.csv"
        : "Converted JSON.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="inner">
          <h1>
            {conversionType === "jsonToCsv" ? "JSON to CSV" : "CSV to JSON"}
            <button
              title={
                conversionType !== "jsonToCsv"
                  ? "Convert JSON to CSV"
                  : "Convert CSV to JSON"
              }
              onClick={handleSwapConversion}
            >
              <IoMdSwap />
            </button>
          </h1>
          <input
            type="file"
            accept={conversionType === "jsonToCsv" ? ".json" : ".csv"}
            onChange={handleFileChange}
          />
          <button title="Convert" onClick={handleConvert} disabled={waitFile}>
            {conversionType === "jsonToCsv"
              ? "Convert to CSV"
              : "Convert to JSON"}
          </button>
        </div>
      </div>
      <div className="csv-output">
        <div className="op-in">
          <h2>
            {conversionType === "jsonToCsv" ? "CSV " : "JSON "}
            Preview
          </h2>
          <button title='Download' className="btn" onClick={handleDownload} disabled={waitData}>
            <IoMdCodeDownload style={{ height: "20px", width: "20px" }} />
            <span>
              {conversionType === "jsonToCsv"
                ? " Download CSV"
                : " Download JSON"}
            </span>
          </button>
        </div>
        <SyntaxHighlighter
          className="box"
          language="javascript"
          style={ghcolors}
        >
          {data
            ? conversionType === "jsonToCsv"
              ? csv
              : JSON.stringify(json, null, 2)
            : "No data to preview."}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default App;
