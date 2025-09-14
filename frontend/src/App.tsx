import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Sparkles, TrendingUp, Star, MessageCircle, Filter, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChat, setActiveChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi! I\'m your shopping assistant. What are you looking for today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones Pro', price: 199.99, originalPrice: 249.99, rating: 4.8, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300', discount: 20 },
    { id: 2, name: 'Smart Fitness Watch', price: 299.99, originalPrice: 399.99, rating: 4.9, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300', discount: 25 },
    { id: 3, name: 'Premium Coffee Maker', price: 159.99, originalPrice: 199.99, rating: 4.7, image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=300', discount: 20 },
    { id: 4, name: 'Ergonomic Office Chair', price: 249.99, originalPrice: 349.99, rating: 4.6, image: 'https://images.pexels.com/photos/586763/pexels-photo-586763.jpeg?auto=compress&cs=tinysrgb&w=300', discount: 29 }
  ];

  const trendingCategories = [
    { name: 'Electronics', icon: '📱', trend: '+15%' },
    { name: 'Fashion', icon: '👗', trend: '+8%' },
    { name: 'Home & Garden', icon: '🏠', trend: '+12%' },
    { name: 'Sports', icon: '⚽', trend: '+6%' }
  ];

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: newMessage };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: `I'd be happy to help you find ${newMessage}! Based on current trends, I can show you the best deals and compare prices across multiple retailers. Would you like me to search for specific products or show you recommendations?`
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setNewMessage('');
  };

  useEffect(() => {
    // Add floating animation to elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="backdrop-blur-md bg-gray-900/80 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Savvy Shopper
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Categories</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Deals</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <User className="w-5 h-5" />
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 absolute w-full z-40">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="#" className="text-gray-300 hover:text-blue-400">Categories</a>
            <a href="#" className="text-gray-300 hover:text-blue-400">Deals</a>
            <a href="#" className="text-gray-300 hover:text-blue-400">About</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="floating mb-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Smart Shopping
              </span>
              <br />
              <span className="text-white">Made Simple</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto floating">
            Get personalized recommendations, compare prices across retailers, and find the best deals with our AI-powered shopping assistant.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 floating">
            <div className="relative group">
              <input
                type="text"
                placeholder="What are you shopping for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-lg border border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-400"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6 group-focus-within:text-blue-400 transition-colors duration-300" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition-transform duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center floating">
            <button 
              onClick={() => setActiveChat(!activeChat)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Assistant</span>
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-2xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Browse Deals</span>
            </button>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      {activeChat && (
        <section className="fixed bottom-4 right-4 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl text-white">
            <h3 className="font-semibold">Shopping Assistant</h3>
            <button onClick={() => setActiveChat(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-2xl ${message.type === 'user' 
                  ? 'bg-blue-500 text-white ml-8' 
                  : 'bg-gray-100 text-gray-800 mr-8'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Ask about products..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300">
                Send
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Trending Categories */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 floating">Trending Categories</h3>
          <p className="text-gray-300 floating">Discover what's popular right now</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {trendingCategories.map((category, index) => (
            <div key={index} className="floating bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:scale-105 transform transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{category.name}</h4>
              <div className="flex items-center text-green-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{category.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="floating">
              <h4 className="text-4xl font-bold mb-2">2M+</h4>
              <p className="text-blue-100">Products Analyzed</p>
            </div>
            <div className="floating">
              <h4 className="text-4xl font-bold mb-2">$500M</h4>
              <p className="text-blue-100">Savings Generated</p>
            </div>
            <div className="floating">
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Savvy Shopper</span>
              </div>
              <p className="text-gray-400">Your intelligent shopping companion for finding the best deals and products.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Home</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Categories</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Deals</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">About</a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Contact Us</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">FAQ</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Privacy</a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Savvy Shopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;