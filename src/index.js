import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './Layout/MainLayout'

import './index.css';

import TimeData from './jsondata/data.json'

ReactDOM.render(
  <React.StrictMode> <MainLayout TimeData={TimeData} /> </React.StrictMode>,
  document.getElementById('root')
);