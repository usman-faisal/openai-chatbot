import React, { createContext, useRef, useState } from 'react'
import Container from "./components/Container"
import Header from "./components/Header"
import Chat from './components/Chat'
import Form from './components/Form'
import {response} from './getData'
function App() {
  const ref = useRef(null)
  const [chatData,setChatData] = useState([
    {text: "Hello", owner: "user"},
    {text: "Hi there, how can I help you?", owner: "bot"}
  ])
  const [inputValue,setInputValue] = useState('')
  function handleChange(e){
    setInputValue(e.target.value)
  }
  function handleClick(e){
    e.preventDefault();
    if(!inputValue) return;
    setInputValue('')
    setChatData(prevData => {
      return [
      ...prevData,
      {text: inputValue,owner: "user"},
      {text: "loading",owner:"bot",loading: true}
    ]
    })
    response(inputValue).then(res => {
      const chatText = res.choices[0].text
      setChatData(prevData => {
        return prevData.map(chat => {
          if(chat.loading){
            return {...chat,text: chatText,loading: false}
          }
          else{
            return {...chat};
          }
        })
      })
    })
  }
  return (
    <Container>
      <Header />
      <Chat data = {chatData}/>
      <Form 
      handleChange={handleChange}
      inputValue = {inputValue}
      handleClick = {handleClick}
      inputRef = {ref}
      />
    </Container>
  )
}

export default App

{/* <>
<div className="container">
  <header className='header'><h1>Chat GPT</h1></header>
  <div className="chat-box">
    <p className="chat chat-user">How are you lorem</p>
    <p className="chat chat-bot ">Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit consectetur! Odio voluptas vero voluptate dolorum aperiam! Hic sit aspernatur commodi iste corrupti ratione itaque, at voluptas ut iusto! Natus.</p>
  </div>
  <form className="form">
    <input type="text" className="form-input" />
    <button className="form-button">Send</button>
  </form>
</div>
</> */}