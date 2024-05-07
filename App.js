import './App.css';
// import Abot from './components/Abot';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About'
import TextForm from './components/TextForm';
import React , {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} 
from "react-router-dom";


function App() {
  
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null);
    }, 3000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    if (mode==='light'){
      setMode('dark');
      document.body.classList.add('bg-'+cls)
      document.body.style.backgroundColor="#042743";
      document.title='textutil-Dark Mode';
      showAlert("Dark Mode enables","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode enables","success");
      document.title='TextUtils-LightMode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="My Text Editor" aboutText="Rom" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3' id="honey"> 
        <Switch>
          <Route exact path="/">
          <TextForm heading="TextUtils- Word Counter, Spacing etc."  showAlert={showAlert} mode={mode}/>
          </Route>

          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
        </Switch>
        </div>
        
      </Router> 
    </>
  );
}

export default App;
