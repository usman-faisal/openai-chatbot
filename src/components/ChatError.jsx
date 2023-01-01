import React from "react";

function ChatError({ msg }) {
  return (
    <div className="error">
      <p className="error-message">{JSON.stringify(msg.message) || msg}</p>
    </div>
  );
}

export default ChatError;
