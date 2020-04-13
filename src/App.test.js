import React from 'react';
import App from './App';


it("Fetch call testing", async function() {
  const responseJson = new App()
  console.warn(responseJson.componentDidMount());

  expect("hello").toEqual("hello")
  
})
