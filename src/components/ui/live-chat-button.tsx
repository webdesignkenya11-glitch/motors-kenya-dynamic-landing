import { MessageCircle } from "lucide-react";
import { Button } from "./button";
import { useState, useEffect } from "react";

const LiveChatButton = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "👋 Hi! Need help?",
    "💬 Chat with us now!",
    "📞 We're here for you!",
    "✨ Quick response!"
  ];

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(messageTimer);
  }, []);

  const handleChatClick = () => {
    const phoneNumber = "+254720496076";
    const message = "Hello! I'd like to inquire about your trucks.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <style>{`
        @keyframes pulse-colors {
          0%, 100% { background: linear-gradient(135deg, #10b981, #059669); }
          50% { background: linear-gradient(135deg, #059669, #047857); }
        }
        @keyframes icon-blink {
          0%, 100% { color: #fff; transform: rotate(0deg); }
          50% { color: #fbbf24; transform: rotate(5deg); }
        }
        @keyframes typing-dots {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .whatsapp-pulse {
          animation: pulse-colors 3s ease-in-out infinite;
        }
        .icon-blink {
          animation: icon-blink 2.5s ease-in-out infinite;
        }
        .typing-indicator span {
          animation: typing-dots 1.4s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 group">
        {/* Hover Bubble */}
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl px-4 py-3 max-w-xs border border-gray-100">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 font-medium mb-1">
                  EQUIPMENT KING INC
                </div>
                {isTyping ? (
                  <div className="typing-indicator flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-800 font-medium">
                    {messages[currentMessage]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleChatClick}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full whatsapp-pulse relative overflow-hidden border-4 border-white/50 shadow-xl"
          size="icon"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-90"></div>

          {/* WhatsApp Icon */}
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 relative z-10 icon-blink" />

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-bounce border-2 border-white">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </Button>
      </div>
    </>
  );
};

export default LiveChatButton;
