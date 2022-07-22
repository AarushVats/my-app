import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  // const [green, setGreen] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled", "success")
    }
    
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
  }
  const toggleGreen = () => {
    if (mode === 'light') {
      setmode('success')
      document.body.style.backgroundColor = '#0b2d1d';
      showAlert("Green mode has been enabled", "success")
    }
    else if(mode=== 'dark'){
      setmode('success')
      document.body.style.backgroundColor = '#0b2d1d';
      showAlert("Green mode has been enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar title='textutils' aboutText='about us' mode={mode} togglemode={togglemode} toggleGreen={toggleGreen} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
          {/* <Routes>
            <Route exact path="/"  element=> */}
              
            {/* </Route>
            <Route exact path="/about" element={<AboutUs/>}>
            
            </Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>

  );
}

export default App;
