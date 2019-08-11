import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it('renders an element with text Hello', () => {
  const results = render(<App/>);
  console.log(results.debug());
});
