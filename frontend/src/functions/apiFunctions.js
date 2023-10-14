// functions/apiFunctions.js
import axios from "axios";

export const postInput = (content, setResult) => {
  const rootUrl =
    process.env.NODE_ENV === "production"
      ? "https://https-github-com-junshen19-sentiment.onrender.com"
      : "";
  axios.post(`${rootUrl}/`, { content: content }).then((res) => {
    setResult(res.data.result);
  });
};
