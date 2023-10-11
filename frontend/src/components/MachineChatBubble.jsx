const MachineChatBubble = ({ result }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble">
        <p>Prediction: {result}</p>
      </div>
    </div>
  );
};

export default MachineChatBubble;
