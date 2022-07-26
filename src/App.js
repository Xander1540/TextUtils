import './Appa.css';
import React,{useState} from 'react'

//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// change class= to "className="
// change href="#" to href="/"
function App() {
    const [mode, setMode]= useState('light'); //whether dark mode is enable or not\
    const [alert, setAlert]=useState(null);
    const [color, setColor]=useState('white');

    const showAlert=(message,type)=>{
        setAlert({
            message: message,
            type: type
        })
        setTimeout( ()=>{
            setAlert(null);
        }, 1500);
    }

    const colorChanger= () =>{
        if(color==='cyan'){
            setColor(document.body.style.backgroundColor='white');
        }else{
        setColor(document.body.style.backgroundColor='cyan');
        showAlert("Cyan mode enabled!", "success")
        }
    }

    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enabled.", "success")
        }else{
            setMode('dark');
            document.body.style.backgroundColor='#042743';
            showAlert("Dark mode has been enabled.", "success")
        }
    }

    return (
        <>
            <Navbar title="TextUtils" aboutText="About TextUtils" color={color} mode={mode} toggleMode={toggleMode} colorChanger={colorChanger}/>
            <Alert alert={alert}/>
            <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" color={color} mode={mode}/>
            {/*<About ></About>*/}
            </div>   
        </>
    );
}

export default App;

