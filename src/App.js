import './Appa.css';
import React,{useState} from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// change class= to "className="
// change href="#" to href="/"
// href to to
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode]= useState('light'); //whether dark mode is enable or not\
    const [alert, setAlert]=useState(null);
    //const [color, setColor]=useState('white');

    const showAlert=(message,type)=>{
        setAlert({
            message: message,
            type: type
        })
        setTimeout( ()=>{
            setAlert(null);
        }, 1500);
    }

    {/*const colorChanger= () =>{
        if(color==='cyan'){
            setColor(document.body.style.backgroundColor='white');
        }else{
        setColor(document.body.style.backgroundColor='cyan');
        showAlert("Cyan mode enabled!", "success")
        }
    }*/}

    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='#042743';
            showAlert("Dark mode has been enabled.", "success")
        }else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enabled.", "success")
        }
    }

    return (
        <>
        <Router>
            <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter" mode={mode}/>
          </Route>
            </Switch>
            </div>
        </Router>
        </>
    );
}

export default App;

