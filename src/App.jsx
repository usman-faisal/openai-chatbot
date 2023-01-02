import React, { useRef, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Chats from "./components/Chats";
import Form from "./components/Form";
import { response } from "./getData";
function App() {
  const ref = useRef(null); // ref of the input

  // chat data for full conversation
  const [chatData, setChatData] = useState([
    { text: "Hello", owner: "user" },
    { text: "Hi there, how can I help you?", owner: "bot" },
  ]);
  //////////////////////////////////

  // handling user input
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  ///////////////////////

  // handling click
  function handleClick(e) {
    e.preventDefault();
    if (!inputValue) return;
    setInputValue("");
    ref.current.disabled = true;
    setChatData((prevData) => {
      return [
        ...prevData,
        { text: inputValue, owner: "user" },
        { loading: true }, // to render "ChatLoading" component when loading is true
      ];
    });
    const TimeoutTimer = new Promise((_, rej) => {
      setTimeout(() => {
        rej("Please check your connection and try again");
      }, 20000);
    });
    Promise.race([response(inputValue), TimeoutTimer])
      .then((res) => {
        const chatText = res.data.choices[0].text;
        setChatData((prevData) => {
          return prevData.map((chat) => {
            if (chat.loading) {
              return { ...chat, text: chatText, loading: false };
            } else {
              return { ...chat };
            }
          });
        });
        ref.current.disabled = false;
        ref.current.focus();
      })
      .catch((err) => setChatData({ error: true, msg: err }));
  }
  ////////////////////////////////////////////////

  return (
    <Container>
      <Header />
      <Chats data={chatData} />
      <Form
        handleChange={handleChange}
        inputValue={inputValue}
        handleClick={handleClick}
        inputRef={ref}
      />
    </Container>
  );
}

export default App;
