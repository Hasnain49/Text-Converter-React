import './App.css';
// import About from './Components/About';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
// import TextForm from './Components/TextForm'
import Home from './Components/Home';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
      // document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
      // document.title="TextUtils - Light Mode";
    }
  }
  return (
    <BrowserRouter>
    <Navbar title="TextUtils" homeText="HOME" aboutText="ABOUT US" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path='/' element={<Home showAlert={showAlert} mode={mode}/>}/>
      <Route exact path='/about' element={<About mode={mode}/>}/>
    </Routes>
    {/* <div className="container my-3">
    <TextForm heading="Enter text to analyze below" mode={mode}/>
    <About/>
    </div> */}
    </BrowserRouter>
  );
}

export default App;
 