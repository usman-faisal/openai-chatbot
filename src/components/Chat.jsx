import React from 'react'
import { motion } from 'framer-motion'
function Chat({data}) {
  return (
    <div className="chat-box">
      {data.map((chat,index) => {
        return !chat.loading &&
        <motion.p
        initial={{opacity: 0,y:100}}
        animate={{opacity: 1,y:0}}
        transition={{duration:0.5,type: 'tween'}}
        className=
        {
        chat.owner === "user" ? 
        "chat chat-user":
        "chat chat-bot"
        }
        key={index}
        >{chat.text}</motion.p>
      })}
    </div>
  )
}

export default Chat