import React from 'react'
import Container from "./components/Container"
import Header from "./components/Header"
import Chat from './components/Chat'
import Form from './components/Form'
function App() {
  return (
    <Container>
      <Header />
      <Chat />
      <Form />
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