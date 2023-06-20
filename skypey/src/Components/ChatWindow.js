import React from "react";

const ChatWindow = ({activeUserId}) => {
    return (
        <div className="ChatWindow">Conversation for user Id:{activeUserId}</div>
    );
};

export default ChatWindow;