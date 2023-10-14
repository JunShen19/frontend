// ChatForm.js
import React from "react";

const ChatForm = ({ isValid, inputText, handleInputChange, handleSubmit }) => {
  return (
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
  );
};

export default ChatForm;
