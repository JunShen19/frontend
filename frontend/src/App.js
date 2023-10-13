import "./App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import UserChat from "./components/UserChat";
import MachineChatBubble from "./components/MachineChatBubble";

function App() {
  const [result, setResult] = useState("");
  const [inputText, setInputText] = useState("");
  const [chatBubble, setChatBubble] = useState([]);
  const [submittedText, setSubmittedText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const scrollableDivRef = useRef();

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      addChatBubble(submittedText, result);
      setInputText("");
    } else didMount.current = true;
    // eslint-disable-next-line
  }, [result]);

  const addChatBubble = (content, result) => {
    const index = chatBubble.length;
    setChatBubble([
      ...chatBubble,
      <div key={index}>
        <UserChat text={content} />
        <MachineChatBubble result={result} />
      </div>,
    ]);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(inputText);
    const isValidInput = /^[a-zA-Z0-9]+$/.test(inputText);
    if (isValidInput) {
      postInput(inputText);
      setIsValid(true);
    } else {
      setIsValid(false);
      setInputText("");
    }
  };
  const postInput = (content) => {
    const rootUrl =
      process.env.NODE_ENV === "production"
        ? "https://https-github-com-junshen19-sentiment.onrender.com"
        : "";
    axios.post(`${rootUrl}/`, { content: content }).then((res) => {
      setResult(res.data.result);
    });
  };

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
          <form onSubmit={handleSubmit} className="join">
            <input
              type="text"
              placeholder={!isValid ? "Please input English" : "Type here"}
              className={`input input-bordered join-item ${
                isValid ? "" : "placeholder-red-500 bg-red-100"
              }`}
              value={inputText}
              onChange={handleInputChange}
              required
            />
            <button className="btn join-item rounded-r-full" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 9l-6 6 6 6" />
                <path d="M20 4v7a4 4 0 0 1-4 4H5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
