"use client"
import React, { useState, useEffect } from "react";
import { Camera, Sun, Moon, Droplet, PanelLeftOpen, History, Settings, HelpCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [analyses, setAnalyses] = useState([
    {
      id: "1",
      image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: new Date(2024, 1, 1),
      skinType: "Combination",
      concerns: ["Mild acne", "Uneven texture"],
      moisture: 45,
      hydration: 62
    },
    {
      id: "2",
      image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: new Date(2024, 1, 2),
      skinType: "Dry",
      concerns: ["Fine lines", "Dryness"],
      moisture: 38,
      hydration: 55
    }
  ]);

  const [messages] = useState([
    {
      id: "welcome",
      type: "ai",
      content: "👋 Welcome to your AI skin analysis dashboard! Upload a photo of your skin or ask me anything about skincare.",
      timestamp: "9:30 AM"
    }
  ]);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Custom date formatting function
  interface DateFormattable {
    getMonth(): number;
    getDate(): number;
    getFullYear(): number;
  }

  const formatDate = (date: DateFormattable): string => {
    const months: string[] = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  const renderSidebar = () => {
    return (
      <div className={`
        ${screenWidth < 1024 
          ? `fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}` 
          : 'w-16 bg-white border-r border-neutral-100 flex flex-col items-center py-6 gap-6'}
      `}>
        <div className="flex justify-between items-center p-4 lg:hidden">
          <div className="w-10 h-10 bg-[#ADFF00] rounded-xl flex items-center justify-center">
            <Droplet className="w-6 h-6 text-black" />
          </div>
          <button onClick={toggleMobileSidebar} className="text-black">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4 lg:p-0">
          <div className="w-10 h-10 bg-[#ADFF00] rounded-xl lg:flex items-center justify-center hidden">
            <Droplet className="w-6 h-6 text-black" />
          </div>
          <nav className="flex-1 flex flex-col gap-4">
            <button className="p-3 rounded-xl bg-black text-white">
              <Camera className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl hover:bg-neutral-100 text-neutral-600">
              <Sun className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl hover:bg-neutral-100 text-neutral-600">
              <Moon className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl hover:bg-neutral-100 text-neutral-600">
              <History className="w-5 h-5" />
            </button>
          </nav>
          <div className="flex flex-col gap-4">
            <button className="p-3 rounded-xl hover:bg-neutral-100 text-neutral-600">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl hover:bg-neutral-100 text-neutral-600">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderRightSidebar = () => {
    return (
      <div className={`
        ${screenWidth < 1024 
          ? `fixed top-0 right-0 w-64 h-full bg-white z-50 overflow-y-auto transform transition-transform duration-300 ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}` 
          : 'w-80 border-l border-neutral-100 bg-white p-6 overflow-y-auto'}
      `}>
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-semibold">Analysis History</h2>
          <button onClick={toggleRightSidebar} className="text-black">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6">
          {analyses.map((analysis) => (
            <div
              key={analysis.id}
              className="p-4 rounded-2xl border border-neutral-100 hover:border-[#ADFF00] cursor-pointer transition-colors"
            >
              <img
                src={analysis.image}
                alt="Skin analysis"
                className="w-full h-40 object-cover rounded-3xl mb-4"
              />
              <time className="text-sm text-neutral-500">
                {formatDate(analysis.date)}
              </time>
              <h3 className="font-medium mt-2">{analysis.skinType}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {analysis.concerns.map((concern) => (
                  <span
                    key={concern}
                    className="text-xs px-2 py-1 bg-neutral-100 rounded-full"
                  >
                    {concern}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Moisture</span>
                  <span>{analysis.moisture}%</span>
                </div>
                <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ADFF00]"
                    style={{ width: `${analysis.moisture}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#FFFDF8] relative">
      {screenWidth < 1024 && (
        <button 
          onClick={toggleMobileSidebar} 
          className="fixed top-4 left-4 z-40 lg:hidden p-2 bg-white rounded-full shadow-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {screenWidth < 1024 && (
        <button 
          onClick={toggleRightSidebar} 
          className="fixed top-4 right-4 z-40 lg:hidden p-2 bg-white rounded-full shadow-md"
        >
          <History className="w-6 h-6" />
        </button>
      )}

      {screenWidth >= 1024 ? renderSidebar() : null}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="p-6 border-b border-neutral-100 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Skin Analysis</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-neutral-800">
              <Camera className="w-4 h-4" />
              New Analysis
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${
                message.type === "ai" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`p-4 rounded-xl max-w-xl ${
                  message.type === "ai"
                    ? "bg-white border border-neutral-100"
                    : "bg-black text-white"
                }`}
              >
                <p>{message.content}</p>
                <time className="text-xs opacity-50 mt-2">{message.timestamp}</time>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-neutral-100 bg-white">
          <div className="flex gap-4">
            <button className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50">
              <Camera className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Ask about your skin analysis or skincare advice..."
              className="flex-1 rounded-xl border border-neutral-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#ADFF00]"
            />
            <button className="px-6 py-3 bg-[#ADFF00] text-black rounded-xl hover:bg-[#ADFF00]/90">
              Send
            </button>
          </div>
        </div>
      </div>

      {screenWidth >= 1024 ? renderRightSidebar() : null}

      {/* Mobile Modals for Sidebar and Right Sidebar */}
      {screenWidth < 1024 && isMobileSidebarOpen && renderSidebar()}
      {screenWidth < 1024 && isRightSidebarOpen && renderRightSidebar()}
    </div>
  );
};

export default Dashboard;