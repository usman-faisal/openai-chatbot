import React from "react";
import ChatLoading from "./ChatLoading";
import ChatError from "./ChatError";
import Chat from "./Chat";
import { nanoid } from "nanoid";
function Chats({ data }) {
  return (
    <div className="chat-box">
      {!data.error ? (
        data.map((chat, index) => {
          return !chat.loading ? (
            <Chat chat={chat} key={index} />
          ) : (
            <ChatLoading />
          );
        })
      ) : (
        <ChatError msg={data.msg} />
      )}
    </div>
  );
}

export default Chats;
