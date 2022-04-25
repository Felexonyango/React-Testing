import React,{useState} from 'react'
import './App.css';
import Counter from './component/Counter/Counter'
import FetchData from './component/FetchData/FetchData';
import Input from './component/Input/Input';

function App() {
  const [showDiv,setShowDiv]=useState(true)
  return (
    <div className="App">
  <h3>Testing React application</h3>
  <Counter/>
  <FetchData/>
  <Input showDiv={showDiv}/>
    </div>
  );
}

export default App;
