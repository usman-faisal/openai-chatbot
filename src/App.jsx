import React, { useRef, useState } from 'react'
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
    ref.current.disabled = true
    setChatData(prevData => {
      return [
      ...prevData,
      {text: inputValue,owner: "user"},
      {text: "loading",owner:"bot",loading: true}
    ]
    })
    response(inputValue).then(res => {
      const chatText = res.data.choices[0].text
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
      ref.current.disabled = false;
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

