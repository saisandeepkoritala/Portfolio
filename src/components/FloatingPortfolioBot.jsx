import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 
import './floatingPortfolioBot.css'; 

const FloatingPortfolioBot = ({server}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! Ask me anything about my projects, skills, or experience.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. Add state to keep track of the threadId across requests
  const [threadId, setThreadId] = useState(null);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuestion = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { id: Date.now(), text: userQuestion, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/askBot/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 2. Include the threadId in the payload (it will be undefined on the first request)
        body: JSON.stringify({ question: userQuestion, threadId }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // 3. Capture and save the thread ID returned by the backend
      if (data.extractedThreadId) {
        setThreadId(data.extractedThreadId);
      }

      // 4. Update state using data.result.answer (or fallback to data.result if your wrapper differs)
      const botAnswer = data.result?.answer || "I parsed the response but couldn't find the answer text.";

      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: botAnswer, 
        isBot: true 
      }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Oops! I'm having trouble connecting to my backend. Please try again later.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bot-container">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button className="bot-toggle-btn" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <span>🤖 Ask About Sai</span>
            <span className="dot">
              {server ? 'Online' : 'Connecting...'}
            </span>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          {/* Messages Container */}
          <div className="chat-messages-area">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.isBot ? 'bot' : 'user'}`}>
                <div className={`message-bubble ${msg.isBot ? 'bot' : 'user'}`}>
                  {msg.isBot ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && <div className="chat-loading">Thinking...</div>}
            <div ref={chatEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="chat-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="chat-input"
            />
            <button type="submit" disabled={isLoading} className="chat-submit-btn">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingPortfolioBot;