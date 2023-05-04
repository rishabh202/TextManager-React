import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
        
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to uppercase", "success")
      }
      
      const handleExtraSpaces = () => {
        let newText  = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Removed extra spaces", "success")
      }
      
      const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        // props.showAlert("Text has been cleared", "success")
      }
  
  const handleLowClick = () => {
        
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase", "success")
      }   

      // const handleUndo = () => {
      //   let newText = text.pop();
           
      //     // input.value = lastMemento ? lastMemento : input.value
      //   }
  
  const handleOnChange = (event) => {
        // event.preventDefault();
        // console.log("On Change");
        setText(event.target.value)
       
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  // const reversed = () => {
  //   let splitWord = text.split("");

  //   let reverseWord = splitWord.reverse("");
  //   let joinedWords = reverseWord.join("");
  //   let newText = joinedWords

  //   setText(newText);
  // };

  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text))
    props.showAlert("word has been replaced", "success")
  }

  
      const copyContent = async () => {
      let text = document.getElementById('exampleFormControlTextarea1').innerHTML;
      try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
        props.showAlert("Text has been copied", "success")
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }

  

  // Add a function about copying text, also to count the number to vowels and consonant

  const [text, setText] = useState('');
  // setText("New Text");    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
    <div className="form-group mb-3" >       
      <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="9"></textarea>
    </div>
    
    <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
    <button type="button" onClick={handleExtraSpaces}className="btn btn-primary mx-1">Remove Extra Spaces</button>
    <button type="button" onClick={speak}className="btn btn-primary mx-1">Text-to-Speech</button>
    {/* <button type="button" onClick={reversed}className="btn btn-primary ">Reverse</button> */}
    <button type="button" onClick={replacecasefunc}className="btn btn-primary mx-1">Replace</button>
    <button type="button" onClick={handleClearClick}className="btn btn-primary mx-1">Clear</button>
    {/* <button type="button" onClick={handleUndo}className="btn btn-primary mx-1">Undo</button> */}
    <button type="button" onClick={copyContent}className="btn btn-primary mx-1">Copy</button>
  </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read (Approx)</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter your text in the text-area above to preview it here'}</p>
     </div>

    </>
  )
}

// You can add dummy text, it will be better, that way, preview with also have something in it. or add box to preview just like textArea

