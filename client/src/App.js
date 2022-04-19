import React, { useEffect } from 'react';
import './App.css';
import Form from "./Form";
import data from './data.json';

export default function App() {  
  useEffect(() => {;
    document.title = data.docTitle;
  }, []);

  return (
    <div className="App">
      <h1 className='title'>{data.webTitle}</h1>
      <p className='descr'>{data.webDescription}</p>
      <Form/>
    </div>
  );
}
