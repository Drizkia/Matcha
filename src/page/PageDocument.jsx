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
  RefreshCw,
  Trash2,
  File,
  Menu,
  X
} from 'lucide-react';
import ChatBot from './ChatBot';
import { deleteDocument } from '../services/api';

export default function PageDocument({ onNavigate, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // <DATA DARI BACKEND: STATS & FILES>
  const stats = {
    totalFiles: 0,
    lastUpdated: "-",
    storageUsed: "0 MB"
  };

  const [files, setFiles] = useState([]);
  // </DATA DARI BACKEND>

  const handleDelete = async (fileId, fileType) => {
    if (!window.confirm("Apakah kamu yakin ingin menghapus dokumen ini?")) return;
    
    try {
      // Kita pakai session_id sementara: 'demo-session'
      await deleteDocument({
        session_id: 'demo-session',
        file_type: fileType
      });
      
      setFiles(files.filter(f => f.id !== fileId));
      alert("Dokumen berhasil dihapus.");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Gagal menghapus dokumen.");
    }
  };

  const navItems = [
    { key: 'dashboard', icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard' },
    { key: 'career-path', icon: <TrendingUp className="w-4 h-4" />, label: 'Jalur Karier' },
    { key: 'resource', icon: <BookOpen className="w-4 h-4" />, label: 'Sumber Belajar' },
    { key: 'document', icon: <FileText className="w-4 h-4" />, label: 'Dokumen', active: true },
    { key: 'setting', icon: <Settings className="w-4 h-4" />, label: 'Profil' },
  ];

  return (
    <div className="min-h-screen bg-[#c8f0d5] font-sans flex flex-col md:flex-row md:p-4 md:gap-4">

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-[#f8f5eb] px-4 py-3 border-b border-white/50 shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-md">
            <Sprout className="text-white w-4 h-4" />
          </div>
          <div>
            <p className="text-[#35a95b] font-bold tracking-[0.1em] text-[9px] uppercase leading-none">Matcha</p>
            <p className="text-gray-800 font-bold text-[11px] leading-none mt-0.5">Brankas Dokumen</p>
          </div>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl bg-white/70 text-gray-600">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f5eb] border-b border-white/50 px-4 py-3 flex flex-col gap-1 z-20 shadow-md">
          {navItems.map(item => (
            <button key={item.key} onClick={() => { onNavigate(item.key); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors text-left ${item.active ? 'bg-[#e5f8ec] text-[#35a95b] font-bold' : 'text-gray-500 hover:bg-white/50'}`}>
              {item.icon} {item.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/50 mt-1">
            <button className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs">
              <HelpCircle className="w-3.5 h-3.5" /> Bantuan
            </button>
            <button onClick={onLogout} className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs">
              <LogOut className="w-3.5 h-3.5" /> Keluar
            </button>
          </div>
        </div>
      )}

      {/* Sidebar - Desktop Only */}
      <aside className="hidden md:flex w-56 lg:w-64 bg-[#f8f5eb] rounded-3xl p-5 lg:p-6 flex-col shadow-sm border border-white/50 relative z-10 flex-shrink-0">
        <div className="flex items-center gap-3 mb-8 pl-2">
          <div className="w-10 h-10 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
            <Sprout className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-[#35a95b] font-bold tracking-[0.1em] text-[10px] uppercase">Matcha</h1>
            <h2 className="text-gray-800 font-bold text-xs leading-tight mt-0.5">Platform Karier AI</h2>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </button>
          <button onClick={() => onNavigate('career-path')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <TrendingUp className="w-4 h-4" /> Jalur Karier
          </button>
          <button onClick={() => onNavigate('resource')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <BookOpen className="w-4 h-4" /> Sumber Belajar
          </button>
          <button onClick={() => onNavigate('document')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
            <FileText className="w-4 h-4" /> Dokumen
          </button>
          <button onClick={() => onNavigate('setting')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors mt-4">
            <Settings className="w-4 h-4" /> Profil
          </button>
        </nav>

        {/* Mini Card */}
        <div className="mt-4 mb-4 bg-white/60 p-4 rounded-2xl border border-white">
           <h4 className="text-[10px] font-bold text-[#35a95b] tracking-widest uppercase mb-1">Brankas</h4>
           <p className="text-gray-500 text-[11px] leading-relaxed">Kelola dokumen kariermu dengan aman.</p>
        </div>

        <div className="flex gap-2 mt-auto">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition">
            <HelpCircle className="w-3.5 h-3.5" /> Bantuan
          </button>
          <button onClick={onLogout} className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition">
            <LogOut className="w-3.5 h-3.5" /> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#f8f5eb] rounded-none md:rounded-3xl p-4 sm:p-6 lg:p-10 relative overflow-y-auto pb-24 md:pb-10 shadow-sm border-0 md:border border-white/50">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Brankas Dokumen</h1>
          <p className="text-gray-500 text-sm">Kelola dokumen karier yang diunggah dengan aman.</p>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#fcfbfa] rounded-2xl p-4 shadow-sm border border-white/50 flex flex-wrap gap-3 mb-8 sm:mb-10">
          <div className="bg-[#e4f7eb] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#35a95b]"></span>
             <span className="text-gray-600 font-medium text-xs">Total Berkas: <strong className="text-gray-900">{stats.totalFiles}</strong></span>
          </div>
          <div className="bg-[#fff9ea] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#f8aa18]"></span>
             <span className="text-gray-600 font-medium text-xs">Terakhir Diperbarui: <strong className="text-gray-900">{stats.lastUpdated}</strong></span>
          </div>
          <div className="bg-[#e0f2f1] px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#00897b]"></span>
             <span className="text-gray-600 font-medium text-xs">Penyimpanan: <strong className="text-gray-900">{stats.storageUsed}</strong></span>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
           {files.map(file => (
             <div key={file.id} className="bg-[#fcfbfa] rounded-[2rem] p-6 sm:p-8 shadow-sm border-2 border-dashed border-[#8ccf32] flex flex-col items-center text-center hover:bg-white transition-colors group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8ccf32] to-[#6fb324] rounded-2xl flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform duration-300">
                  <File className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{file.name}</h3>
                <p className="text-gray-400 text-xs mb-1">{file.size}</p>
                <p className="text-gray-400 text-xs mb-6 sm:mb-8">Diunggah {file.uploadedAt}</p>
                
                <div className="flex gap-3 w-full mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#e4f7eb] text-[#35a95b] hover:bg-[#d1f0dc] px-4 py-2.5 rounded-xl font-bold text-xs transition-colors border border-green-100">
                     <RefreshCw className="w-3.5 h-3.5" /> Perbarui
                  </button>
                  <button onClick={() => handleDelete(file.id, file.type)} className="flex-1 flex items-center justify-center gap-1.5 bg-[#ffebee] text-[#e53935] hover:bg-[#ffcdd2] px-4 py-2.5 rounded-xl font-bold text-xs transition-colors border border-red-100">
                     <Trash2 className="w-3.5 h-3.5" /> Hapus
                  </button>
                </div>
             </div>
           ))}
        </div>

      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f8f5eb] border-t border-white/50 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-30 flex items-center justify-around px-2 py-2">
        {navItems.map(item => (
          <button key={item.key} onClick={() => onNavigate(item.key)}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-colors min-w-[56px] ${item.active ? 'text-[#35a95b]' : 'text-gray-400'}`}>
            {item.icon}
            <span className="text-[9px] font-semibold leading-none">{item.label}</span>
          </button>
        ))}
      </nav>

      <ChatBot />

    </div>
  );
}
