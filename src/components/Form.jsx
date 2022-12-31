import React, { useState } from 'react'
import {motion} from "framer-motion"
function Form({handleChange,handleClick,inputValue,inputRef}) {
  return (
    <form className="form">
      <input 
      type="text" 
      ref = {inputRef}
      onChange={handleChange}
      value = {inputValue}
      className="form-input" />
      <motion.button 
      onClick = {handleClick} 
      className="form-button"
      whileHover={{scale: 1.04}}
      whileTap = {{scale: 0.95}}
      >
        Send
      </motion.button>
    </form>   
  )        
} 

export default Form