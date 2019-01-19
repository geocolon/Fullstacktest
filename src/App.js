import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Data1 = require('../src/data/Object1.json');
const Data2 = require('../src/data/Object2.json');
const Data3 = require('../src/data/Object3.json');


const rawData = [
  Data1,
  Data2,
  Data3
];


const mainData1 = rawData[0].map((items) => items);
const mainData2 = rawData[1].map((items) => items);
const mainData3 = rawData[2].map((items) => items);

let store = {};

store['mainData1'] =  Object.assign(store, mainData1);
store['mainData2'] =  Object.assign(store, mainData2);
store['mainData3'] =  Object.assign(store, mainData3);

var resultObject = rawData.reduce(function(result, currentObject) {
  for(var key in currentObject) {
    
      // copy merge data
      if (currentObject.hasOwnProperty(key)) {
          result[key] = currentObject[key];
      }
      // find total value
      if (currentObject[key].hasOwnProperty('value')) {
        result[key]['value'] = parseInt(result[key]['value']) + parseInt(currentObject[key].value);
    }

  }
  return result;
}, {});

console.log('total all data: ',resultObject);

const arrObj = Object.values(resultObject);

console.log(arrObj)

// console.log(mainData1)
class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="main-list">
         
          {/* {store.mainData1[0].item_code} */}
            {/* <li key={}>{mainData.forEach( items => items )}</li> */}
          {/* This is a working test below */}
        {arrObj.map((dataDetails, index) => {
            
            return <div className="outer-container" key={index}>{
                    <div className="inner-container">
                      <p><strong>{dataDetails['item_text']}</strong></p>
                      {/* {dataDetails['item_code']}&nbsp; */}
                      <p><strong>Code : </strong> {dataDetails['item_code']}</p>
                      <p><strong>Children : </strong> {dataDetails['children'].length}</p>
                      <p><strong>Total value: </strong> {dataDetails['value']}</p>
                    </div>                      
                  }</div>
          })}
          </div>
          
        </body>
          
      </div>
    );
  }
}

export default App;
