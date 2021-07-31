import React from 'react'
import '../css/app.css';
import Editor from './Editor';
import Preview from './Preview';

const App = () =>{
  return (
    <div className="App">
      <Editor />
      <Preview/>
    </div>
  )
}

export default App;
