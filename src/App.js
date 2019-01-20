import React, { Component } from 'react';
import './App.css';

const Data1 = require('../src/data/Object1.json');
const Data2 = require('../src/data/Object2.json');
const Data3 = require('../src/data/Object3.json');


const rawData = [
  Data1,
  Data2,
  Data3
];

const store = {};

// Start the store data
rawData[0].map((items, key) => store[key] = parseInt(items.value)); 
// Add the next JSON data set       
rawData[1].map((items, key) => store[key] = store[key] + parseInt(items.value));
rawData[2].map((items, key) => store[key] = store[key] + parseInt(items.value));

const resultObject = rawData.reduce(function(result, currentObject) {
  // store all values with name
  for(var key in currentObject) {
      // copy merge data
      if (currentObject.hasOwnProperty(key)) {
        result[key] = currentObject[key];
      }
  }
  return result;
}, {});

const arrObj = Object.values(resultObject);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="main-list">
        {arrObj.map((dataDetails, index) => {
            return <div className="outer-container" key={index}>{
                    <div className="inner-container">
                      <p><strong>{dataDetails['item_text']}</strong></p>
                      <p><strong>Code : </strong> {dataDetails['item_code']}</p>
                      <p><strong>Children : </strong> {dataDetails['children'].length}</p>
                      <p><strong>Total value: </strong> {store[index]}</p>
                    </div>                      
                  }</div>
          })}
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
