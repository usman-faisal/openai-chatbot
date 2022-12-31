import React, { useState } from 'react'

function Form({handleChange,handleClick,inputValue,inputRef}) {
  return (
    <form className="form">
      <input 
      type="text" 
      ref = {inputRef}
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