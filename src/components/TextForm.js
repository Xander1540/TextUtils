//rfc
import React,{useState} from "react";
// use state hook ko import kiya 
// ek text create kiya jiski default value ('.....') 
//aur jab bhi text ko update karoge then use setText

export default function TextForm(props) {
  const handleUpClick= () =>{
      //console.log("Uppercase was clicked");
      let newText= text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!", "success")
  }

  const handleLoClick= () =>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")
}

const handleFkClick= () =>{
  let newText= '';
  setText(newText)
  props.showAlert("Cleared!", "success")
}

  const handleOnChange= (event)=>{
    console.log("On Change");
     setText(event.target.value)
  }

  const handleCopy =()=>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied!", "success")
  }

  //const [text, setText]= useState('Enter your text here');
  const [text, setText]= useState('');
  // text="new text"   ->Wrong way to change the state
  // setText("new text");  Wrong way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">                     { /* value={text} therefore you can not input anything so we create handleOnChange (event handler)*/}
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
        <button disabled={text.length===0} className="btn btn-sm btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-sm btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-sm btn-primary mx-2 my2" onClick={handleFkClick} >Erase</button>
        <button disabled={text.length===0} className="btn btn-sm btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>{/*filter() is used to filter element that is in array if function returns true.*/}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview."}</p>
    </div> 
    </>
  );
}
