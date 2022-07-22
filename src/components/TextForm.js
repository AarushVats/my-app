import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(" ")
    const [word, setword] = useState()
    const [replace, setreplace] = useState()
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to upper case", "success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to lower case", "success")
    }
    const handleClearClick=()=>{
        let newText = " ";
        setText(newText)
        props.showAlert(" Clear text", "success")
    }
    const handlefindClick=()=>{
        let find = text.match(word)
        setText(text.replace(find, replace))
        props.showAlert("text replaced", "success")
        
    }
    const handleOnChange=(event)=>{
        console.log("onchange")
        setText(event.target.value);
    }
    const handleOChange=(event)=>{
        console.log("onchange")
        setword(event.target.value);
    }
    const handleChange=(event)=>{
        console.log("onchange")
        setreplace(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode=='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick} >Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handlefindClick} >replace text</button>
            <textarea className="form-control my-4" style={{backgroundColor: props.mode=='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} onChange={handleOChange} value={word} id="myBox" rows="1"></textarea>
            <textarea className="form-control my-4" style={{backgroundColor: props.mode=='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} onChange={handleChange} value={replace} id="myBox" rows="1"></textarea>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Character</p>
            {/* <p>{0.008 * text.split(" ").length}</p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter your text in textbox to preview here"}</p>
        </div>
        </>
    )
}

