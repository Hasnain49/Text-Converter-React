import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    // const newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLoClick = () => {
    // console.log("Lower was clicked" + text);
    // const newText = text.toUpperCase();
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleOnChange = (e) => {
    // console.log("Onchange");
    setText(e.target.value);
  };
  const handleClearClick = () => {
    // console.log("Onchange");
    const clearText = "";
    setText(clearText);
    props.showAlert('Text cleared sucessfully!', 'success');
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  }
  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/)
    setText(newTxt.join(" "));
    props.showAlert('Extra spaces removed!', 'success');
  }


  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mt-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control mb-2"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black',caretColor:props.mode === 'dark' ? 'white' : '' }}
          ></textarea> 
          <button disabled={text.length===0} className="btn btn-primary my-1 me-1 ms-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
};

export default TextForm;
