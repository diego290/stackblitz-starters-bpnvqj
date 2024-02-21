import React from 'react';
import Chat from './components/Chat/Chat.component';

const Home: React.FC = () => {
  return (
    <div className="container flex flex-col items-center mx-auto p-4">
      <Chat />
    </div>
  );
};

export default Home;
