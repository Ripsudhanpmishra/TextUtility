import React from 'react';
import { useState } from 'react';

export default function FormComponent(props) {
  const handletUpclick = ()=> {
    let newText  = text.toUpperCase();
    setText(newText);
  }
  
  const handletLoclick = ()=> {
    let newText  = text.toLowerCase();
    setText(newText);
  }

  const handleeraseClick = ()=> {
    setText("");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleCopy =()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleMode =() =>{
    console.log('Mode change')

  }
  const handleOnchange = (event)=> {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  // let mystyle ={
  //   align : 'center'
  // }


  return (
  <>
    {/* <div className=" container d-grid gap-2 d-md-flex justify-content-md-end my-2">
    <button type="button" className="btn btn-info">Dark Mode</button>
    </div> */}
    <div className="form-check form-switch container d-grid gap-2 d-md-flex justify-content-md-end my-2">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleMode}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Dark Mode</label> 
    </div>


    <div className="container">
    <h2>{props.heading}</h2>
    <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handletUpclick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handletLoclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-warning mx-2' onClick={handleeraseClick}>Erase</button>


    </div>

    <div className="container my-3">
    <h3>Text Summary</h3>
    <p>{text.split(" ").length} words & {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>

  </>
  )
};
