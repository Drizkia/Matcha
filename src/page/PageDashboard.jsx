import React, { useState } from 'react';
import { 
  Sprout, 
  LayoutDashboard, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut,
  Sparkles,
  UploadCloud,
  File,
  Lightbulb,
  ShieldCheck,
  Target
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageDashboard({ onNavigate, onLogout }) {
  const [userName, setUserName] = useState("John Doe"); // Placeholder name

  return (
    <div className="min-h-screen bg-[#c8f0d5] p-4 font-sans flex gap-4">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#f8f5eb] rounded-3xl p-6 flex flex-col shadow-sm border border-white/50 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 pl-2">
          <div className="w-10 h-10 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
            <Sprout className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-[#35a95b] font-bold tracking-[0.1em] text-[10px] uppercase">Matcha</h1>
            <h2 className="text-gray-800 font-bold text-xs leading-tight mt-0.5">AI Career Growth <br/>Platform</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </button>
          <button onClick={() => onNavigate('career-path')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <TrendingUp className="w-4 h-4" />
            Career Path
          </button>
          <button onClick={() => onNavigate('resource')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <BookOpen className="w-4 h-4" />
            Resources
          </button>
          <button onClick={() => onNavigate('document')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <FileText className="w-4 h-4" />
            Document Vault
          </button>
          <button onClick={() => onNavigate('setting')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors mt-4">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </nav>

        {/* Bottom Actions */}
        <div className="flex gap-2 mt-auto">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition">
            <HelpCircle className="w-3.5 h-3.5" />
            Help
          </button>
          <button 
            onClick={onLogout}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content (Intake Hub) */}
      <main className="flex-1 bg-[#e4f7eb] rounded-3xl p-8 relative overflow-hidden shadow-sm border border-white/30">
        
        {/* Background Blur Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-[#35a95b] text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-white">
            <Sparkles className="w-3 h-3" /> Intake Hub
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {userName}!</h1>
          <p className="text-gray-500 text-sm">Upload your documents and define your target role to begin your career journey.</p>
        </div>

        {/* Grid Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6">
          
          {/* Left Column (Uploads) */}
          <div className="flex-1 space-y-6">
            
            {/* CV Upload */}
            <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 text-sm">Upload Your CV / Resume</h3>
                <span className="bg-[#e4f7eb] text-[#35a95b] px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <FileText className="w-3 h-3" /> PDF
                </span>
              </div>
              <div className="border-2 border-dashed border-[#8ccf32] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-green-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8ccf32] to-[#6fb324] rounded-xl flex items-center justify-center shadow-md mb-4">
                  <File className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-gray-800 text-[15px] mb-1">Drag & drop or click to browse</p>
                <p className="text-gray-400 text-xs px-4">Securely upload your latest resume for AI parsing.</p>
              </div>
            </div>

            {/* LinkedIn Upload */}
            <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 text-sm">Upload LinkedIn Profile PDF</h3>
                <span className="bg-[#e4f7eb] text-[#35a95b] px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <Target className="w-3 h-3" /> Profile
                </span>
              </div>
              <div className="border-2 border-dashed border-[#8ccf32] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-green-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8ccf32] to-[#6fb324] rounded-xl flex items-center justify-center shadow-md mb-4">
                  <UploadCloud className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-gray-800 text-[15px] mb-1">Drag & drop or click to browse</p>
                <p className="text-gray-400 text-xs px-4">Add your LinkedIn export to enrich your profile.</p>
              </div>
            </div>

          </div>

          {/* Right Column (Job Req & Action) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Target Job Requirement */}
            <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 text-sm">Target Job Requirements</h3>
                <span className="bg-[#e4f7eb] text-[#35a95b] px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <Target className="w-3 h-3" /> Role brief
                </span>
              </div>
              <textarea 
                className="w-full flex-1 bg-white border border-gray-100 rounded-2xl p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent resize-none shadow-inner"
                placeholder="Paste the job description here..."
              ></textarea>
            </div>

            {/* Action Box */}
            <div className="bg-[#fff9ea] rounded-[2rem] p-6 border border-[#fde8af] shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-3 mb-6 relative z-10">
                <div className="mt-0.5 w-8 h-8 bg-[#8ccf32] rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Personalized onboarding</h4>
                  <p className="text-gray-500 text-xs leading-relaxed pr-8">
                    We'll tailor your roadmap, skill gaps, and weekly actions.
                  </p>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#3fb067] to-[#8ccf32] hover:from-[#35a95b] hover:to-[#7dc325] text-white rounded-xl font-bold text-sm shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 relative z-10">
                <Sparkles className="w-4 h-4" />
                Analyze & Brew My Roadmap
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-gray-400 text-[10px] font-medium relative z-10">
                <ShieldCheck className="w-3 h-3 text-[#35a95b]" />
                Your data stays private and secure
              </div>
              
              {/* Decorative sparkle in corner */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#1b5e3a] rounded-full flex items-center justify-center opacity-10 blur-[2px]">
                 <Sparkles className="w-6 h-6 text-[#aee449]" />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Floating Chatbot Component */}
      <ChatBot />

    </div>
  );
}
