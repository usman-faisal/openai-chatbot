import React from 'react'
import {motion,AnimatePresence} from "framer-motion";
function ChatLoading() {
  return (
    <AnimatePresence>
    <motion.p
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{type: "tween",delay: 0.5}}
    className="chat chat-bot"
    exit={{opacity: 0}}
    >
        Typing...
    </motion.p>
    </AnimatePresence>
  )
}

export default ChatLoading