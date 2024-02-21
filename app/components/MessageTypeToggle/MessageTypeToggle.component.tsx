import React from 'react';
import { MessageTypeToggleProps } from '../MessageTypeToggle/MessageTypeToggle.types';

const MessageTypeToggle: React.FC<MessageTypeToggleProps> = ({
  isUserMessage,
  toggleMessageType,
}) => {
  return (
    <div className="flex items-center justify-center my-4">
      <label
        htmlFor="message-type-toggle"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            id="message-type-toggle"
            type="checkbox"
            className="sr-only"
            checked={isUserMessage}
            onChange={toggleMessageType}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isUserMessage
                ? 'transform translate-x-6 bg-blue-600'
                : 'bg-red-600'
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">
          {isUserMessage ? 'Mensagem do Usuário' : 'Mensagem do Sistema'}
        </div>
      </label>
    </div>
  );
};

export default MessageTypeToggle;
