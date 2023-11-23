import React from 'react'
import "./style.css"
function index({messages,btn}) {
    
  return (
    <ul>{
       messages.map((msg,index)=>(
        <li id='list' key={index}>{msg} <button onClick={()=>btn(index)}>Delete</button></li>
       ))
        }</ul>
  )
}

export default index