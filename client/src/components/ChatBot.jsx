import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (message.trim() === "") return; 
    setResponse(message); 
    setMessage("");
  };

  return (
    <div>
      <div
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        onClick={toggleChatBot}
      >
        <div
          className="h-16 w-16 bg-teal-300/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-teal-300/30"
          style={{ backgroundImage: "url('/chatbot3.png')", backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-80 h-96 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700/50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">ChatBot</h2>
            <button
              onClick={toggleChatBot}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              ✕
            </button>
          </div>

          {/* Chatbot Response Area */}
          <div className="h-64 bg-gray-700/50 rounded-lg p-3 text-white">
            {!response ? <p>ChatBot is here to help!</p> : 
            <p className='h-40 overflow-y-auto'>{response}</p>}
          </div>

          {/* Input & Send Button */}
          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 bg-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button onClick={sendMessage} className="ml-2 text-teal-400 hover:text-white transition-all">
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
