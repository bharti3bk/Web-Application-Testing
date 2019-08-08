import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect'

it('renders an element with text Hello', () => {
  const results = rtl.render(<App/>);
  console.log(results.debug());
});
