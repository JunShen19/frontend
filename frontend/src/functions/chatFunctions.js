// functions/chatFunctions.js
import { useState, useRef, useEffect } from "react";
import { addChatBubble } from "./chatBubbleFunctions";
import { postInput } from "./apiFunctions";

export const useChat = () => {
  const [result, setResult] = useState("");
  const [inputText, setInputText] = useState("");
  const [chatBubble, setChatBubble] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const scrollableDivRef = useRef();

  const didMount = useRef(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(inputText);
    const isValidInput =
      /^[A-Za-z0-9 ,.!?']+$/.test(inputText) && inputText.trim() !== "";

    if (isValidInput) {
      postInput(inputText, setResult);
      setIsValid(true);
    } else {
      console.log(inputText);
      setIsValid(false);
      setInputText("");
    }
  };

  useEffect(() => {
    if (didMount.current) {
      setChatBubble(addChatBubble(chatBubble, submittedText, result));
      setInputText("");
    } else didMount.current = true;
    // eslint-disable-next-line
  }, [result]);

  return {
    result,
    inputText,
    chatBubble,
    submittedText,
    isValid,
    scrollableDivRef,
    handleInputChange,
    handleSubmit,
  };
};
