import React from "react";
import { motion } from "framer-motion";
import ChatLoading from "./ChatLoading";
import ChatError from "./ChatError";
function Chat({ data }) {
  const userVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };
  const botVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div className="chat-box">
      {!data.error ? (
        data.map((chat, index) => {
          return !chat.loading ? (
            <motion.p
              variants={chat.owner === "user" ? userVariants : botVariants}
              initial={"initial"}
              animate={"animate"}
              transition={{ duration: 0.5, type: "tween" }}
              className={
                chat.owner === "user" ? "chat chat-user" : "chat chat-bot"
              }
              key={index}
            >
              {chat.text}
            </motion.p>
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

export default Chat;
