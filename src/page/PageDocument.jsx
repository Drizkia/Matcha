import React from 'react';
import { 
  Sprout, 
  LayoutDashboard, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut,
  RefreshCw,
  Trash2,
  File
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageDocument({ onNavigate, onLogout }) {
  // <DATA DARI BACKEND: STATS & FILES>
  const stats = {
    totalFiles: 2,
    lastUpdated: "Today",
    storageUsed: "4.2 MB"
  };

  const files = [
    {
      id: 1,
      name: "My_CV_2024.pdf",
      size: "1.8 MB",
      uploadedAt: "Today",
      type: "cv"
    },
    {
      id: 2,
      name: "LinkedIn_Profile.pdf",
      size: "2.4 MB",
      uploadedAt: "Yesterday",
      type: "linkedin"
    }
  ];
  // </DATA DARI BACKEND>

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
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
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
          <button onClick={() => onNavigate('document')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
            <FileText className="w-4 h-4" />
            Document Vault
          </button>
          <button onClick={() => onNavigate('setting')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors mt-4">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </nav>

        {/* Mini Card */}
        <div className="mt-4 mb-4 bg-white/60 p-4 rounded-2xl border border-white">
           <h4 className="text-[10px] font-bold text-[#35a95b] tracking-widest uppercase mb-1">Vault</h4>
           <p className="text-gray-500 text-[11px] leading-relaxed">Securely manage your career documents.</p>
        </div>

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

      {/* Main Content */}
      <main className="flex-1 bg-[#f8f5eb] rounded-3xl p-6 lg:p-10 relative overflow-y-auto h-[calc(100vh-2rem)] custom-scrollbar shadow-sm border border-white/50">
        
        {/* Header */}
        <div className="mb-8 relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Document Vault</h1>
          <p className="text-gray-500 text-sm">Manage your uploaded career documents securely.</p>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#fcfbfa] rounded-2xl p-4 shadow-sm border border-white/50 flex flex-wrap gap-4 mb-10">
          <div className="bg-[#e4f7eb] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#35a95b]"></span>
             <span className="text-gray-600 font-medium text-xs">Total Files: <strong className="text-gray-900">{stats.totalFiles}</strong></span>
          </div>
          <div className="bg-[#fff9ea] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#f8aa18]"></span>
             <span className="text-gray-600 font-medium text-xs">Last Updated: <strong className="text-gray-900">{stats.lastUpdated}</strong></span>
          </div>
          <div className="bg-[#e0f2f1] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#00897b]"></span>
             <span className="text-gray-600 font-medium text-xs">Storage Used: <strong className="text-gray-900">{stats.storageUsed}</strong></span>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {files.map(file => (
             <div key={file.id} className="bg-[#fcfbfa] rounded-[2rem] p-8 shadow-sm border-2 border-dashed border-[#8ccf32] flex flex-col items-center text-center hover:bg-white transition-colors group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8ccf32] to-[#6fb324] rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-105 transition-transform duration-300">
                  <File className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{file.name}</h3>
                <p className="text-gray-400 text-xs mb-1">{file.size}</p>
                <p className="text-gray-400 text-xs mb-8">Uploaded {file.uploadedAt}</p>
                
                <div className="flex gap-3 w-full mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#e4f7eb] text-[#35a95b] hover:bg-[#d1f0dc] px-4 py-2.5 rounded-xl font-bold text-xs transition-colors border border-green-100">
                     <RefreshCw className="w-3.5 h-3.5" /> Update
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#ffebee] text-[#e53935] hover:bg-[#ffcdd2] px-4 py-2.5 rounded-xl font-bold text-xs transition-colors border border-red-100">
                     <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
             </div>
           ))}
        </div>

      </main>

      <ChatBot />

    </div>
  );
}
