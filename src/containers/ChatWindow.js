import React from 'react';
import _ from 'lodash';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from '../containers/MessageInput';
import './ChatWindow.css';
import store from '../store';


const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const {typing} = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing}/>
        </div>
    );
};

export default ChatWindow;