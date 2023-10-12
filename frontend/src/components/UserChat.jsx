const UserChat = ({ text }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble">
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
};

export default UserChat;
