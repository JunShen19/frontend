const UserChat = ({ text }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserChat;
