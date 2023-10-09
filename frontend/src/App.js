import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedText(inputText);

    postInput(inputText);
  };
  const postInput = (string) => {
    axios.post("/", { content: string }).then((res) => {
      setData(res.data.result);
      console.log(res.data.result);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          輸入字串:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedText && <p>已提交的字串是: {submittedText}</p>}
      <p>結果為: {data}</p>
    </div>
  );
}

export default App;
