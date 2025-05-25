import React,{useState} from 'react'

export default function Textform() {
  const [text,setText]=useState('')
  const handleUpclick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)

  }

   const handleOnchange=(event)=>{
    setText(event.target.value);

  }
  return (
    <>
    
    <div className='Textform'>
    <h1> Enter text here:  </h1>
 
  <textarea className="Textform"  value={text} onChange={handleOnchange}></textarea>

<button type="button" className="btn btn-primary btn-lg" onClick={handleUpclick}>Uppercase</button>
</div>
</>
  )
}
