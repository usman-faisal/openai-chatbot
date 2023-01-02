import React from "react";
import { motion } from "framer-motion";

function Chat({ chat }) {
  const userVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };
  const botVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <motion.p
      variants={chat.owner === "user" ? userVariants : botVariants}
      initial={"initial"}
      animate={"animate"}
      transition={{ duration: 0.5, type: "tween" }}
      className={chat.owner === "user" ? "chat chat-user" : "chat chat-bot"}
    >
      {chat.text}
    </motion.p>
  );
}

export default Chat;
