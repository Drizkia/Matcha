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
  Gauge
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageCareerPath({ onNavigate, onLogout }) {
  // <DATA DARI BACKEND: ATS MATCH & TRACKS>
  const atsMatchRate = 50; 
  const careerTracksCount = 100;
  // </DATA DARI BACKEND>

  // <DATA DARI BACKEND: SKILLS>
  const skillsHave = ["Python", "Data Analysis", "Communication", "Excel", "SQL"];
  const skillsNeed = ["Machine Learning", "TensorFlow", "Cloud Platforms", "System Design", "Leadership"];
  // </DATA DARI BACKEND>

  // <DATA DARI BACKEND: ROADMAP>
  // Jika array kosong ([]), maka akan menampilkan state default
  const roadmapData = [
    {
      id: 1,
      title: "Python Fundamentals",
      status: "Completed",
      progress: 100,
      description: "Build fluency in syntax, data structures, and practical scripting for daily workflow automation."
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      status: "In Progress",
      progress: 68,
      description: "Strengthen problem solving with arrays, trees, graphs, and interview-ready patterns."
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      status: "Locked",
      progress: 24,
      description: "Learn model selection, evaluation, and core concepts for intelligent product features."
    },
    {
      id: 4,
      title: "Cloud & Deployment",
      status: "Locked",
      progress: 8,
      description: "Ship reliable solutions with CI/CD, containers, and scalable cloud infrastructure."
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
          <button onClick={() => onNavigate('career-path')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
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

        {/* AI Coach Mini Card */}
        <div className="mt-4 mb-4 bg-white/60 p-3 rounded-2xl flex items-center gap-3 border border-white">
           <div className="w-8 h-8 bg-[#e5f8ec] rounded-lg flex items-center justify-center text-[#35a95b]">
              <Sprout className="w-4 h-4" />
           </div>
           <div>
              <p className="text-[11px] font-bold text-gray-800">AI Coach</p>
              <p className="text-[10px] text-[#35a95b]">Ready to guide you</p>
           </div>
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

      {/* Main Content (Career Path) */}
      <main className="flex-1 rounded-3xl p-6 lg:p-8 relative overflow-y-auto h-[calc(100vh-2rem)] custom-scrollbar">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-6 relative z-10">
          <div>
            <h4 className="text-[#35a95b] font-bold tracking-[0.15em] text-[10px] uppercase mb-1">Matcha Career Path</h4>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Career Path</h1>
          </div>
          <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-[#35a95b] text-xs font-bold shadow-sm border border-white/50">
            ATS optimized roadmap
          </div>
        </div>

        {/* Container 1: Stats */}
        <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50 mb-6 flex flex-col md:flex-row items-center gap-6">
          
          {/* Circular Progress (ATS Rate) */}
          <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
             <div className="absolute inset-0 rounded-full border-8 border-green-100"></div>
             {/* Note: In a real app, use SVG for proper circle progress, this is a visual approximation */}
             <div className="absolute inset-0 rounded-full border-8 border-[#35a95b] border-t-transparent border-l-transparent rotate-45"></div>
             <div className="absolute inset-0 bg-[#35a95b]/10 rounded-full blur-xl"></div>
             <div className="text-center relative z-10">
               <h2 className="text-3xl font-extrabold text-gray-900 leading-none">{atsMatchRate}%</h2>
               <p className="text-[9px] font-bold tracking-widest text-[#35a95b] uppercase mt-1">ATS Match<br/>Rate</p>
             </div>
          </div>

          {/* Stat Badges */}
          <div className="flex flex-wrap gap-3">
             <div className="bg-[#e4f7eb] px-4 py-2.5 rounded-full flex items-center gap-2 border border-white shadow-sm">
                <Gauge className="w-4 h-4 text-[#35a95b]" />
                <span className="text-gray-800 font-bold text-xs">{careerTracksCount}+ Career Tracks</span>
             </div>
             {/* Tanda dari backend selesai */}
          </div>
        </div>

        {/* Container 2: Skill Gap Tracker */}
        <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50 mb-6">
           <h3 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-5">
             <Gauge className="w-4 h-4 text-[#35a95b]" /> Skill Gap Tracker
           </h3>
           
           <div className="space-y-4">
             {/* Skills You Have */}
             <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <h4 className="text-[10px] font-bold text-[#35a95b] tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35a95b]"></span> Skills You Have
                </h4>
                <div className="flex flex-wrap gap-2">
                   {skillsHave.map((skill, idx) => (
                     <span key={idx} className="bg-[#e4f7eb] text-[#2c8a4a] px-3 py-1.5 rounded-full text-[11px] font-bold">
                       {skill}
                     </span>
                   ))}
                </div>
             </div>

             {/* Skills You Need */}
             <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <h4 className="text-[10px] font-bold text-[#f8aa18] tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f8aa18]"></span> Skills You Need
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

        {/* Container 3: The Learning Roadmap */}
        <div className="bg-[#fcfbfa] rounded-[2rem] p-6 shadow-sm border border-white/50">
           <h3 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-6">
             <BookOpen className="w-4 h-4 text-[#35a95b]" /> The Learning Roadmap
           </h3>

           {roadmapData.length === 0 ? (
             // DEFAULT STATE JIKA KOSONG
             <div className="text-center py-10 bg-white rounded-2xl border border-gray-100 border-dashed">
                <Sprout className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <h4 className="font-bold text-gray-600">No Roadmap Generated</h4>
                <p className="text-xs text-gray-400 mt-1">Please upload your CV and Target Role in the Dashboard to generate your roadmap.</p>
             </div>
           ) : (
             <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#35a95b] before:via-[#35a95b]/50 before:to-transparent">
               
               {roadmapData.map((item, idx) => (
                 <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                   {/* Timeline dot */}
                   <div className={`absolute left-0 -ml-[27px] w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${item.status === 'Completed' ? 'bg-[#35a95b]' : item.status === 'In Progress' ? 'bg-[#35a95b]' : 'bg-[#35a95b]'}`}>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   </div>

                   {/* Card */}
                   <button 
                     onClick={() => onNavigate('resource', item.title)}
                     className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm w-full relative hover:shadow-md transition-shadow text-left focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent group-hover:-translate-y-1 duration-200"
                   >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-gray-900 text-[13px]">{item.title}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                            item.status === 'Completed' ? 'bg-[#e4f7eb] text-[#35a95b]' :
                            item.status === 'In Progress' ? 'bg-[#fff9ea] text-[#d68f11]' :
                            'bg-gray-100 text-gray-500'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        
                        {/* Progress Bar Mini */}
                        <div className="text-right w-24">
                           <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
                             <div className={`h-full ${
                               item.status === 'Completed' ? 'bg-[#35a95b]' : 
                               item.status === 'In Progress' ? 'bg-gradient-to-r from-[#35a95b] to-[#f8aa18]' : 
                               'bg-gradient-to-r from-[#35a95b] to-gray-300'
                             }`} style={{width: `${item.progress}%`}}></div>
                           </div>
                           <span className="text-[9px] font-bold text-gray-500">{item.progress}%</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-[11px] pr-10 leading-relaxed">{item.description}</p>
                   </button>
                 </div>
               ))}

             </div>
           )}
        </div>

      </main>

      <ChatBot />

    </div>
  );
}
