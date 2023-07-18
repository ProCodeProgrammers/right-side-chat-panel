import React from "react";
import "./Chat.css";
import DoubleTickIcon from "../../assets/read_receipt.svg";

const ChatMessage = ({ sender, title, message, time, isSent }) => {
  const messageBoxStyle = {
    backgroundColor: isSent ? "#007AFF" : "#F2F2F7",
    borderRadius: "8px",
    padding: "10px",
    color: isSent ? "#FFFFFF" : "#000000",
  };

  return (
    <div className={`chat-message ${isSent ? "sent" : "received"}`}>
      <div style={messageBoxStyle} className="message-box">
        {title && <div className="message-title">{title}</div>}
        {message}
        <div className="message-details">
          <span className="message-time" style={{ color: isSent && "#ffffff" }}>
            {time}
          </span>
          {isSent && (
            <span className="double-tick">
              <img
                src={DoubleTickIcon}
                width="22px"
                height="12px"
                color="white"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
