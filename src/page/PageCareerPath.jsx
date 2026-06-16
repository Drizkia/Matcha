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
  CheckCircle2,
  Lock,
  Clock,
  Gauge,
  Menu,
  X
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageCareerPath({ onNavigate, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // <ATS>
  const atsMatchRate = 0; 
  const careerTracksCount = 0;

  // <SKILLS>
  const skillsHave = [];
  const skillsNeed = [];

  // <ROADMAP>
  const roadmapData = [];

  const navItems = [
    { key: 'dashboard', icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard' },
    { key: 'career-path', icon: <TrendingUp className="w-4 h-4" />, label: 'Jalur Karier', active: true },
    { key: 'resource', icon: <BookOpen className="w-4 h-4" />, label: 'Sumber Belajar' },
    { key: 'document', icon: <FileText className="w-4 h-4" />, label: 'Dokumen' },
    { key: 'setting', icon: <Settings className="w-4 h-4" />, label: 'Profil' },
  ];

  return (
    <div className="min-h-screen bg-[#c8f0d5] font-sans flex flex-col md:flex-row md:p-4 md:gap-4">
      <div className="md:hidden flex items-center justify-between bg-[#f8f5eb] px-4 py-3 border-b border-white/50 shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-md">
            <Sprout className="text-white w-4 h-4" />
          </div>
          <div>
            <p className="text-[#35a95b] font-bold tracking-[0.1em] text-[9px] uppercase leading-none">Matcha</p>
            <p className="text-gray-800 font-bold text-[11px] leading-none mt-0.5">Jalur Karier</p>
          </div>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl bg-white/70 text-gray-600">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

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
          <button onClick={() => onNavigate('career-path')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
            <TrendingUp className="w-4 h-4" /> Jalur Karier
          </button>
          <button onClick={() => onNavigate('resource')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <BookOpen className="w-4 h-4" /> Sumber Belajar
          </button>
          <button onClick={() => onNavigate('document')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <FileText className="w-4 h-4" /> Dokumen
          </button>
          <button onClick={() => onNavigate('setting')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors mt-4">
            <Settings className="w-4 h-4" /> Profil
          </button>
        </nav>

        <div className="mt-4 mb-4 bg-white/60 p-3 rounded-2xl flex items-center gap-3 border border-white">
           <div className="w-8 h-8 bg-[#e5f8ec] rounded-lg flex items-center justify-center text-[#35a95b]">
              <Sprout className="w-4 h-4" />
           </div>
           <div>
              <p className="text-[11px] font-bold text-gray-800">Pelatih AI</p>
              <p className="text-[10px] text-[#35a95b]">Siap membimbingmu</p>
           </div>
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

      <main className="flex-1 rounded-none md:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-y-auto pb-24 md:pb-8">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-3 relative z-10">
          <div>
            <h4 className="text-[#35a95b] font-bold tracking-[0.15em] text-[10px] uppercase mb-1">Matcha Jalur Karier</h4>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Jalur Kariermu</h1>
          </div>
          <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-[#35a95b] text-xs font-bold shadow-sm border border-white/50 self-start sm:self-auto">
            Peta jalan dioptimalkan ATS
          </div>
        </div>

        <div className="bg-[#fcfbfa] rounded-[2rem] p-5 sm:p-6 shadow-sm border border-white/50 mb-6 flex flex-col sm:flex-row items-center gap-5">
          
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0">
             <div className="absolute inset-0 rounded-full border-8 border-green-100"></div>
             <div className="absolute inset-0 rounded-full border-8 border-[#35a95b] border-t-transparent border-l-transparent rotate-45"></div>
             <div className="absolute inset-0 bg-[#35a95b]/10 rounded-full blur-xl"></div>
             <div className="text-center relative z-10">
               <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-none">{atsMatchRate}%</h2>
               <p className="text-[9px] font-bold tracking-widest text-[#35a95b] uppercase mt-1">Tingkat<br/>Kecocokan ATS</p>
             </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
             <div className="bg-[#e4f7eb] px-4 py-2.5 rounded-full flex items-center gap-2 border border-white shadow-sm">
                <Gauge className="w-4 h-4 text-[#35a95b]" />
                <span className="text-gray-800 font-bold text-xs">{careerTracksCount}+ Jalur Karier</span>
             </div>
          </div>
        </div>

        <div className="bg-[#fcfbfa] rounded-[2rem] p-5 sm:p-6 shadow-sm border border-white/50 mb-6">
           <h3 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-5">
             <Gauge className="w-4 h-4 text-[#35a95b]" /> Pelacak Kesenjangan Skill
           </h3>
           
           <div className="space-y-4">
             <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <h4 className="text-[10px] font-bold text-[#35a95b] tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35a95b]"></span> Skill yang Kamu Miliki
                </h4>
                <div className="flex flex-wrap gap-2">
                   {skillsHave.map((skill, idx) => (
                     <span key={idx} className="bg-[#e4f7eb] text-[#2c8a4a] px-3 py-1.5 rounded-full text-[11px] font-bold">
                       {skill}
                     </span>
                   ))}
                </div>
             </div>

             <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <h4 className="text-[10px] font-bold text-[#f8aa18] tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f8aa18]"></span> Skill yang Perlu Dikembangkan
                </h4>
                <div className="flex flex-wrap gap-2">
                   {skillsNeed.map((skill, idx) => (
                     <span key={idx} className="bg-[#fff9ea] border border-[#fde8af] text-[#d68f11] px-3 py-1.5 rounded-full text-[11px] font-bold">
                       {skill}
                     </span>
                   ))}
                </div>
             </div>
           </div>
        </div>

        <div className="bg-[#fcfbfa] rounded-[2rem] p-5 sm:p-6 shadow-sm border border-white/50">
           <h3 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-6">
             <BookOpen className="w-4 h-4 text-[#35a95b]" /> Peta Jalan Belajar
           </h3>

           {roadmapData.length === 0 ? (
             <div className="text-center py-10 bg-white rounded-2xl border border-gray-100 border-dashed">
                <Sprout className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <h4 className="font-bold text-gray-600">Belum Ada Peta Jalan</h4>
                <p className="text-xs text-gray-400 mt-1">Unggah CV dan Target Peranmu di Dashboard untuk membuat peta jalanmu.</p>
             </div>
           ) : (
             <div className="relative pl-6 space-y-5 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#35a95b] before:via-[#35a95b]/50 before:to-transparent">
               
               {roadmapData.map((item) => (
                 <div key={item.id} className="relative flex items-center group">
                   <div className="absolute left-0 -ml-[27px] w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center bg-[#35a95b]">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   </div>

                   <button 
                     onClick={() => onNavigate('resource', item.title)}
                     className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm w-full relative hover:shadow-md transition-shadow text-left focus:outline-none focus:ring-2 focus:ring-[#8ccf32] group-hover:-translate-y-1 duration-200"
                   >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-gray-900 text-[13px]">{item.title}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                            item.status === 'Selesai' ? 'bg-[#e4f7eb] text-[#35a95b]' :
                            item.status === 'Sedang Berjalan' ? 'bg-[#fff9ea] text-[#d68f11]' :
                            'bg-gray-100 text-gray-500'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <div className="text-right w-full sm:w-24">
                           <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
                             <div className={`h-full ${
                               item.status === 'Selesai' ? 'bg-[#35a95b]' : 
                               item.status === 'Sedang Berjalan' ? 'bg-gradient-to-r from-[#35a95b] to-[#f8aa18]' : 
                               'bg-gradient-to-r from-[#35a95b] to-gray-300'
                             }`} style={{width: `${item.progress}%`}}></div>
                           </div>
                           <span className="text-[9px] font-bold text-gray-500">{item.progress}%</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-[11px] leading-relaxed">{item.description}</p>
                   </button>
                 </div>
               ))}

             </div>
           )}
        </div>

      </main>

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
