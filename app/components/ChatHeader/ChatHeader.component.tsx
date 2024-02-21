import { ChatHeaderProps } from '../ChatHeader/ChatHeader.types';

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, profileImage }) => (
  <header className="flex items-center p-4 border-b">
    <div className="flex items-center space-x-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <img
          alt={name}
          height="40"
          src={profileImage}
          style={{ aspectRatio: '40/40', objectFit: 'cover' }}
          width="40"
        />
      </span>
      <h1 className="text-xl font-bold">{name}</h1>
    </div>
  </header>
);

export default ChatHeader;
