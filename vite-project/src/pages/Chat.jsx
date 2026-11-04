import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { IoSend } from 'react-icons/io5';

const socket = io('http://localhost:8888');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef();

  const currentUser = { _id: 'user1', name: 'Priyanka' };
  const receiver = { _id: 'florist1', name: 'Flower Shop', avatar: 'https://cdn-icons-png.flaticon.com/512/2821/2821637.png' };

  // Smart Reply Logic
  const getSmartReply = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hlo') || msg.includes('hey')) {
      return "Hello! 🌸 Welcome to our flower shop. How can I help you today?";
    } 
    if (msg.includes('kese') || msg.includes('kaise') || msg.includes('how are you')) {
      return "Main bilkul theek hoon! Aap kaise hain? 🌷 Kya aap koi bouquet dhundh rahe hain?";
    }
    if (msg.includes('price') || msg.includes('rate') || msg.includes('kitne ka')) {
      return "Our bouquets start from ₹299! 🌹 Aapko kaunse flowers pasand hain?";
    }
    if (msg.includes('delivery') || msg.includes('time')) {
      return "We deliver fresh flowers within 2 hours! 🚚 Free delivery on orders above ₹500.";
    }
    if (msg.includes('rose')) {
      return "Red roses are our bestsellers! ❤️ Would you like to see our Rose collection?";
    }
    if (msg.includes('thank') || msg.includes('shukriya')) {
      return "You're most welcome! Happy to help. 💐";
    }
    
    // Default replies if no keyword matches
    const defaultReplies = [
      "That's a lovely choice! 🌸",
      "We have fresh flowers today, would you like to see? 🌹",
      "This bouquet is one of our bestsellers! 💐",
      "Aapko kaunse phool sabse zyada pasand hain? 🌷",
      "I can help you customize this! ✨"
    ];
    return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
  };

  useEffect(() => {
    socket.emit('addUser', currentUser._id);
    socket.on('getMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off('getMessage');
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!text.trim()) return;
    
    const userText = text;
    const msg = { sender: currentUser._id, receiver: receiver._id, text: userText };
    
    socket.emit('sendMessage', msg);
    setMessages((prev) => [...prev, msg]);
    setText('');

    // Typing indicator aur smart reply
    setIsTyping(true);
    setTimeout(() => {
      const replyMsg = {
        sender: receiver._id,
        receiver: currentUser._id,
        text: getSmartReply(userText)
      };
      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 card-cute overflow-hidden bg-white shadow-xl flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-rose p-4 flex items-center gap-3">
        <img src={receiver.avatar} alt="avatar" className="w-12 h-12 rounded-full border-2 border-white bg-white" />
        <div>
          <h3 className="font-semibold text-white text-lg font-display">{receiver.name}</h3>
          <p className="text-xs text-white/90 font-body">{isTyping ? "Typing..." : "🟢 Online"}</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-blush space-y-3">
        {messages.length === 0 && (
          <p className="text-center text-gray-400 mt-10 font-body">Start chatting about flowers... 🌸</p>
        )}
        {messages.map((m, i) => {
          const isMe = m.sender === currentUser._id;
          return (
            <div key={i} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-4 py-2 rounded-2xl font-body ${
                isMe 
                  ? 'bg-rose text-white rounded-br-sm' 
                  : 'bg-white text-gray-700 rounded-bl-sm shadow-sm border border-pink-100'
              }`}>
                {m.text}
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm text-sm animate-pulse">
              Florist is typing...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white flex gap-2 border-t border-pink-100">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a cute message... 🌸"
          className="flex-1 px-4 py-3 rounded-full bg-blush outline-none focus:ring-2 focus:ring-rose text-gray-700 font-body"
        />
        <button onClick={sendMessage} className="bg-rose hover:bg-rose-dark text-white p-3 px-5 rounded-full transition-colors shadow-md flex items-center justify-center">
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;