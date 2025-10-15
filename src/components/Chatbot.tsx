"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotKnowledgeBase: { [key: string]: string } = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! How can I help you?",
    "services": "We offer a wide range of services including Web Development, App Development, Travel Tech Solutions, and Hiring Dedicated Developers. Which one are you interested in?",
    "web development": "Our Web Development services include Custom Web Applications, Responsive Design, E-commerce Solutions, and CMS Integration. You can find more details on our Services page.",
    "app development": "Our App Development services cover Android, iOS, IoT, Native, Flutter, Progressive Web Apps, and Enterprise solutions. Visit our Services page for more info!",
    "contact": "You can reach us via our Contact page or email us at support@guideitsol.com or contact@guideitsol.com.",
    "about": "Guidesoft is a leading IT solutions provider specializing in AI innovation, digital transformation, and business consulting. Learn more on our About Us page.",
    "pricing": "Our pricing varies depending on the scope and complexity of the project. Please contact us for a custom quote!",
    "quote": "For a free consultation and quote, please visit our Contact page or use the 'Get A Quote' button in the header.",
    "thank you": "You're welcome! Is there anything else I can help you with?",
    "thanks": "Glad I could help! Let me know if you need anything else.",
    "default": "I'm sorry, I can only provide information related to our website content. Could you please rephrase your question?"
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([{ id: 1, text: "Hello! I'm your Guidesoft AI Assistant. How can I help you today?", sender: 'bot' }]);
    } else {
      // Clear messages when chatbot closes
      setMessages([]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, newUserMessage]);

    const botResponse = getBotResponse(inputValue.toLowerCase());
    const newBotMessage: Message = { id: messages.length + 2, text: botResponse, sender: 'bot' };
    
    setTimeout(() => {
      setMessages((prev) => [...prev, newBotMessage]);
    }, 500); // Simulate bot typing delay

    setInputValue('');
  };

  const getBotResponse = (query: string): string => {
    if (query.includes("hello") || query.includes("hi")) {
      return chatbotKnowledgeBase["hello"];
    }
    if (query.includes("services") || query.includes("offerings")) {
      return chatbotKnowledgeBase["services"];
    }
    if (query.includes("web development") || query.includes("website")) {
      return chatbotKnowledgeBase["web development"];
    }
    if (query.includes("app development") || query.includes("mobile app")) {
      return chatbotKnowledgeBase["app development"];
    }
    if (query.includes("contact") || query.includes("reach us")) {
      return chatbotKnowledgeBase["contact"];
    }
    if (query.includes("about") || query.includes("company")) {
      return chatbotKnowledgeBase["about"];
    }
    if (query.includes("pricing") || query.includes("cost")) {
      return chatbotKnowledgeBase["pricing"];
    }
    if (query.includes("quote") || query.includes("consultation")) {
      return chatbotKnowledgeBase["quote"];
    }
    if (query.includes("thank you") || query.includes("thanks")) {
      return chatbotKnowledgeBase["thank you"];
    }
    return chatbotKnowledgeBase["default"];
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full shadow-lg bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground hover:opacity-90 transition-all duration-300 relative overflow-hidden"
          size="icon"
          aria-label="Open Chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          <motion.span
            className="absolute inset-0 rounded-full bg-primary-foreground opacity-20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[450px]"
          >
            <Card className="h-full flex flex-col bg-background/80 backdrop-blur-xl border border-primary/20 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-primary/20">
                <CardTitle className="text-lg font-semibold text-foreground">
                  Guidesoft AI Assistant
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 p-4 overflow-hidden flex flex-col">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex",
                          message.sender === 'user' ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[70%] p-3 rounded-lg",
                            message.sender === 'user'
                              ? "bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <div className="p-4 border-t border-primary/20 flex items-center space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button size="icon" onClick={handleSendMessage} className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground hover:opacity-90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;