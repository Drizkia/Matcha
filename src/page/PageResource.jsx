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
  Clock,
  ArrowRight
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageResource({ onNavigate, onLogout, initialTopic = '' }) {
  // <DATA DARI BACKEND: FILTER CATEGORIES>
  const categories = ["All", "Coursera", "Udemy", "YouTube", "Free", "Recommended"];
  // </DATA DARI BACKEND>

  const [activeCategory, setActiveCategory] = useState("All");

  // <DATA DARI BACKEND: COURSE CATALOG>
  // Data ini direkomendasikan berdasarkan Learning Roadmap user
  const coursesData = [
    {
      id: 1,
      title: "Machine Learning A-Z",
      platform: "Coursera",
      description: "Build practical ML intuition with hands-on projects and guided exercises.",
      duration: "24 hrs",
      level: "Intermediate",
      colorCode: "bg-[#aee449]" // Warna hijau muda
    },
    {
      id: 2,
      title: "Python for Data Science",
      platform: "Udemy",
      description: "Learn Python workflows for analysis, visualization, and model building.",
      duration: "18 hrs",
      level: "Beginner",
      colorCode: "bg-[#fde8af]" // Warna kuning muda
    },
    {
      id: 3,
      title: "System Design Masterclass",
      platform: "YouTube",
      description: "Understand scalable architecture patterns used by modern product teams.",
      duration: "30 hrs",
      level: "Advanced",
      colorCode: "bg-[#aee449]" // Warna hijau muda
    },
    {
      id: 4,
      title: "TensorFlow Developer Certificate",
      platform: "Coursera",
      description: "Prepare for certification with practical deep learning implementation.",
      duration: "26 hrs",
      level: "Intermediate",
      colorCode: "bg-[#aee449]" // Warna hijau muda
    },
    {
      id: 5,
      title: "Cloud Computing Fundamentals",
      platform: "Udemy",
      description: "Explore cloud concepts, deployment models, and core infrastructure.",
      duration: "22 hrs",
      level: "Beginner",
      colorCode: "bg-[#fde8af]" // Warna kuning muda
    },
    {
      id: 6,
      title: "Leadership & Communication",
      platform: "YouTube",
      description: "Strengthen influence, feedback, and collaboration for career growth.",
      duration: "16 hrs",
      level: "Advanced",
      colorCode: "bg-[#aee449]" // Warna hijau muda
    }
  ];
  // </DATA DARI BACKEND>

  // Search Logic
  const [searchQuery, setSearchQuery] = useState(initialTopic);

  // Filter based on platform and search query
  const filteredCourses = coursesData.filter(c => {
    const matchCategory = activeCategory === "All" || activeCategory === "Recommended" || activeCategory === "Free" 
      || c.platform === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
          <button onClick={() => onNavigate('resource')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors">
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
              <p className="text-[11px] font-bold text-gray-800">AI Guide</p>
              <p className="text-[10px] text-[#35a95b]">Learning suggestions</p>
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

      {/* Main Content (Learning Catalog) */}
      <main className="flex-1 rounded-3xl p-6 lg:p-8 relative overflow-y-auto h-[calc(100vh-2rem)] custom-scrollbar">
        
        {/* Header and Search */}
        <div className="flex justify-between items-end mb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full text-[#35a95b] text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-white/50">
              <BookOpen className="w-3 h-3" /> Learning Catalog
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Learning Catalog</h1>
            <p className="text-gray-500 text-sm mt-1">What you want to study today</p>
          </div>
          <div className="flex flex-col items-end gap-3">
             <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-[#35a95b] text-xs font-bold shadow-sm border border-white/50 flex items-center gap-1.5">
               <Sparkles className="w-3.5 h-3.5" /> Personalized picks
             </div>
             {searchQuery && (
               <div className="bg-[#fff9ea] text-[#d68f11] px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm border border-[#fde8af] flex items-center gap-2">
                 Filtered by: "{searchQuery}"
                 <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                    <span className="sr-only">Clear Filter</span>
                    &times;
                 </button>
               </div>
             )}
          </div>
        </div>

        {/* Container: Filter Categories */}
        <div className="bg-[#fcfbfa] rounded-full p-2 shadow-sm border border-white/50 mb-6 flex overflow-x-auto custom-scrollbar">
           {categories.map((cat, idx) => (
             <button 
               key={idx}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                 activeCategory === cat 
                 ? (cat === 'Recommended' ? 'bg-[#8ccf32] text-white shadow-sm' : 'bg-white text-gray-800 shadow-sm border border-gray-100')
                 : 'text-gray-500 hover:bg-white/50'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
           {filteredCourses.map(course => (
             <div key={course.id} className="bg-[#fcfbfa] rounded-[2rem] overflow-hidden shadow-sm border border-white/50 flex flex-col hover:shadow-md transition-shadow group">
                
                {/* Top Half (Solid Color placeholder for image) */}
                <div className={`h-32 ${course.colorCode} relative p-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                   <span className="bg-white/70 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm inline-block">
                     {course.platform}
                   </span>
                </div>

                {/* Bottom Half (Content) */}
                <div className="p-6 flex-1 flex flex-col bg-white">
                   <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                     {course.title}
                   </h3>
                   <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                     {course.description}
                   </p>
                   
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 mb-4">
                     <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                     </div>
                     <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-[10px] font-bold">
                        {course.level}
                     </span>
                   </div>

                   <button className="w-full py-3 bg-gradient-to-r from-[#3fb067] to-[#8ccf32] hover:from-[#35a95b] hover:to-[#7dc325] text-white rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-1.5">
                     Start Learning <ArrowRight className="w-4 h-4" />
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
