// functions/chatBubbleFunctions.js
import React from "react";
import UserChat from "../components/UserChat";
import MachineChatBubble from "../components/MachineChatBubble";

export const addChatBubble = (chatBubble, content, result) => {
  const index = chatBubble.length;
  return [
    ...chatBubble,
    <div key={index}>
      <UserChat text={content} />
      <MachineChatBubble result={result} />
    </div>,
  ];
};
