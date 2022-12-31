import React, { useState } from 'react'

function Form({handleChange,handleClick,inputValue}) {
  return (
    <form className="form">
      <input 
      type="text" 
      onChange={handleChange}
      value = {inputValue}
      className="form-input" />
      <button onClick = {handleClick} className="form-button">
        Send
      </button>
    </form>   
  )        
} 

export default Form