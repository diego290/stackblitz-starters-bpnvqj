'use client';

import React, { useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader.component';
import Message from '../ChatMessage/ChatMessage.component';
import { classSystemMessage } from '@/app/utils/utilsStyles';
import ChatInput from '../ChatInput/ChatInput.component';
import { MessageChatProps } from '../ChatMessage/ChatMessage.types';
import MessageTypeToggle from '../MessageTypeToggle/MessageTypeToggle.component';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageChatProps[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isUserMessage, setIsUserMessage] = useState<boolean>(true);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: MessageChatProps = {
      text: inputValue,
      isReceived: !isUserMessage,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const toggleMessageType = () => {
    setIsUserMessage(!isUserMessage);
  };

  const renderSystemMessage = (
    <>
      <div className={classSystemMessage}>
        Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste.
      </div>
      <div className={classSystemMessage}>
        Siga as instruções detalhadas no Notion oficial e boa sorte!
      </div>
    </>
  );

  return (
    <>
      <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
        <ChatHeader name="Mateus Mendes" profileImage="/logo.png" />
        <div className="flex flex-col p-4 overflow-hidden">
          <div className="flex flex-col gap-4 mb-4">{renderSystemMessage}</div>
          {messages.map((msg, index) => (
            <Message key={index} isReceived={msg.isReceived}>
              {msg.text}
            </Message>
          ))}
          <ChatInput
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSendMessage={sendMessage}
          />
        </div>
      </div>
      <p className="mt-4">Para fins de testes:</p>
      <MessageTypeToggle
        isUserMessage={isUserMessage}
        toggleMessageType={toggleMessageType}
      />
    </>
  );
};

export default Chat;
