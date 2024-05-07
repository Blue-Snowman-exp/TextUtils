import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
   
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("coverted to uppercase!","succes");
  }
  const handleDownClick =()=>{
    
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("coverted to lowercase!","succes");
  }
  const handleClear =()=>{
    
    setText("")
  }
  const handleCopy =()=>{
    // var text=document.getElementById('myBox');
    // text.select();
    // navigator.clipboard.writeText(text.value)
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleSpace =()=>{
    var newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange=(event)=>{
   
    setText(event.target.value)
  }
  
  const[text, setText]=useState("Enter text here2");
  return(
    <div id="bluen">
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary"onClick={handleUpClick}>Convert To Upper Text</button>
      <span><button disabled={text.length===0} className="btn btn-primary"onClick={handleDownClick}>Convert To Upper Text</button></span>
      <span><button disabled={text.length===0} className="btn btn-primary"onClick={handleCopy}>Copy Text</button></span>
      <span><button disabled={text.length===0} className="btn btn-primary"onClick={handleSpace}>Remove Spacing</button></span>
      <span><button disabled={text.length===0} className="btn btn-primary"onClick={handleClear}>Clear Text</button></span>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    {/* onChange={handleOnChange} */}
      <h1>Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
      <p>{text.length>0?text:"Nothing to preview here"}</p>
    </div>
    </div>
  )
}
