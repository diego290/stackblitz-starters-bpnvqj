export interface MessageProps {
  isReceived: boolean;
  children: React.ReactNode;
}

export interface MessageChatProps {
  text: string;
  isReceived: boolean;
}
