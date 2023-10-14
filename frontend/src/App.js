// App.js
import React from "react";
import "./App.css";
import ChatForm from "./components/ChatForm";
import { useChat } from "./functions/chatFunctions";

function App() {
  const {
    result,
    inputText,
    chatBubble,
    submittedText,
    isValid,
    scrollableDivRef,
    handleInputChange,
    handleSubmit,
  } = useChat();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-bold">Sentiment-tool</h1>
          <p className="py-2">
            It can predict what kind of sentiment for your content.
          </p>
        </div>

        <div className="form-control w-full max-w-xs mx-auto my-auto rounded-lg p-2 border-2">
          <div
            ref={scrollableDivRef}
            className="chat-container border-2 rounded-lg p-2 h-80 overflow-auto will-change-auto flex flex-col-reverse overflow-y-scroll"
          >
            <div className="flex flex-col">{chatBubble}</div>
            <div className="chat chat-start">
              <div className="chat-bubble">What is your content?</div>
            </div>
          </div>
          <ChatForm
            isValid={isValid}
            inputText={inputText}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
