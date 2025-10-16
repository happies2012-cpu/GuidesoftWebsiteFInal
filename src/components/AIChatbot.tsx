import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, X, MessageCircle, Shield } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Leo, your AI assistant. I have full permissions to help you find the perfect AI tools for your needs. What are you looking for today?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('genai') || input.includes('generative')) {
      return 'Generative AI tools can help you create text, images, audio, and video content. I recommend checking out tools in the "Content Creation" and "Design" categories. Would you like me to show you some specific tools?';
    }
    
    if (input.includes('agent') || input.includes('agentic')) {
      return 'Agentic AI tools are autonomous systems that can perform complex tasks. Look for tools in the "Automation" and "Workflow" categories. These agents can help with research, data analysis, and multi-step processes.';
    }
    
    if (input.includes('chatbot') || input.includes('chat')) {
      return 'AI chatbots are great for customer support, personal assistance, and interactive experiences. Check out tools in the "Chatbots" and "Customer Support" categories. Many of these tools offer customizable personalities and integrations.';
    }
    
    if (input.includes('permission') || input.includes('access')) {
      return 'I have full permissions to assist you with all AI tools and services. You can access everything without any restrictions!';
    }
    
    if (input.includes('help')) {
      return 'I can help you find AI tools based on your needs. Try asking about specific categories like "content creation", "image editing", "coding assistants", or technologies like "GenAI" and "AI agents".';
    }
    
    return 'I have full permissions to help you find the perfect AI tools for your needs. Could you tell me more about what you\'re looking for? For example, are you interested in content creation, automation, or something else?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-24 right-4 w-80 h-96 shadow-2xl z-50 border-primary/20 backdrop-blur-lg bg-background/95">
          <CardHeader className="p-4 border-b border-primary/10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-primary" />
                Leo AI Assistant
                <Shield className="h-4 w-4 text-green-500" />
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 h-full flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted border border-primary/10'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-primary/10">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about AI tools..."
                  className="flex-1 text-sm"
                />
                <Button size="sm" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-2xl z-50 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default AIChatbot;