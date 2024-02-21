import { classSystemMessage, classUserMessage } from '@/app/utils/utilsStyles';
import { MessageProps } from '../ChatMessage/ChatMessage.types';

const Message: React.FC<MessageProps> = ({ isReceived, children }) => {
  const messageClass = isReceived ? classSystemMessage : classUserMessage;

  const icon = isReceived ? null : (
    <img
      alt="Avatar"
      className="rounded-full"
      height="30"
      src="/logo.png"
      style={{ aspectRatio: '40/40', objectFit: 'cover' }}
      width="30"
    />
  );

  return (
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <div className="flex-1">
        <div className={messageClass}>{children}</div>
      </div>
    </div>
  );
};

export default Message;
