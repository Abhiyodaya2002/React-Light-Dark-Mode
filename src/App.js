//import logo from './logo.svg';
import './App.css';
import React ,{useState} from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import {
 // BrowserRouter as Router,   ---> in case any errors uncomment it.
  Switch,
  Route ,
} from "react-router-dom";


function App() {
const [mode,setMode]=useState("light");
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => { //Alert will automatically be removed after 1.5 seconds
    setAlert(null);
  }, 1500);
}
const togglefunc=()=>{ //note: instead of "const togglefunc=()=> " we can write function togglefunc() 
  if(mode==='dark')
  {
    document.body.style.backgroundColor="white";
    setMode('light');
    showAlert("Light mode has been enabled ","success");
  }
  else
  {
    document.body.style.backgroundColor="#042743";
    setMode('dark');
    showAlert("Dark mode has been enabled ","success");
  }
}
  return (
    <>
    
     <Navbar title="React.js" mode={mode} toggle={togglefunc}/>
     <div>
       <Alert alert={alert}/>
     </div>
  
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
     </Switch>
    </>
  );
}

export default App;
