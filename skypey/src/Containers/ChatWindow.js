import React from "react";
import store from "../store";
import Header from "../Components/Header";
import _ from "lodash";
import "./ChatWindow.css"

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages = {_.values(activeMessages)} />
    </div>
  );
};

export default ChatWindow;