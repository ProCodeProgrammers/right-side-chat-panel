import { Box, Card } from "@mui/material";
import "./Chat.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "../../assets/Icon.svg";
import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

const ChatInput = () => {
  return (
    <Box className="chat-input-container">
      <Paper
        component="form"
        className="paper-container"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Start typing..."
          className="chat-input-base"
        />

        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <img src={SendIcon} width="20px" height="20px" />
        </IconButton>
      </Paper>
    </Box>
  );
};

const Chat = () => {
  return (
    <Box>
      <Card className="container">
        <Box p={2}>
          <ChatMessage
            sender="sender"
            message="Hello there!"
            time="11:31 AM"
            isSent={true}
          />
          <ChatMessage
            sender="receiver"
            message="Hi! How are you?"
            time="11:32 AM"
            isSent={false}
            title="Jay"
          />
        </Box>
        <ChatInput />
      </Card>
    </Box>
  );
};

export default Chat;
