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
  User,
  GraduationCap,
  Target,
  Clock,
  AlertTriangle,
  RefreshCw,
  Save,
  Pencil
} from 'lucide-react';
import ChatBot from './ChatBot';

export default function PageSetting({ onNavigate, onLogout }) {
  // <DATA DARI BACKEND: USER PROFILE>
  // Data ini dikirim dari FastAPI (GET /users/me) setelah user login
  const [profile, setProfile] = useState({
    fullName: "Alex Johnson",
    educationalBackground: "Computer Science, B.Sc.",
    targetCareerGoal: "ML Engineer at a top tech company",
    weeklyStudyTime: "8 hours per week"
  });
  // </DATA DARI BACKEND>

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = () => {
    setIsSaving(true);
    // <KIRIM KE BACKEND: PATCH /users/me> 
    // Contoh: await api.updateProfile(profile);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
    }, 1000);
    // </KIRIM KE BACKEND>
  };

  const handleReset = () => {
    if (window.confirm("Are you sure? This will permanently clear your roadmap, skill data, and documents.")) {
      // <KIRIM KE BACKEND: POST /users/me/reset>
      // Contoh: await api.resetAllServices();
      alert("All services reset. You will be logged out.");
      onLogout();
      // </KIRIM KE BACKEND>
    }
  };

  return (
    <div className="min-h-screen bg-[#c8f0d5] p-4 font-sans flex gap-4">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#f8f5eb] rounded-3xl p-6 flex flex-col shadow-sm border border-white/50 relative z-10">
        <div className="flex items-center gap-3 mb-10 pl-2">
          <div className="w-10 h-10 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
            <Sprout className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-[#35a95b] font-bold tracking-[0.1em] text-[10px] uppercase">Matcha</h1>
            <h2 className="text-gray-800 font-bold text-xs leading-tight mt-0.5">AI Career Growth <br/>Platform</h2>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <button onClick={() => onNavigate('dashboard')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </button>
          <button onClick={() => onNavigate('career-path')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <TrendingUp className="w-4 h-4" /> Career Path
          </button>
          <button onClick={() => onNavigate('resource')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <BookOpen className="w-4 h-4" /> Resources
          </button>
          <button onClick={() => onNavigate('document')} className="w-full flex items-center gap-3 text-gray-500 hover:bg-white/50 px-4 py-3 rounded-xl font-semibold text-sm transition-colors">
            <FileText className="w-4 h-4" /> Document Vault
          </button>
          <button onClick={() => onNavigate('setting')} className="w-full flex items-center gap-3 bg-[#e5f8ec] text-[#35a95b] px-4 py-3 rounded-xl font-bold text-sm transition-colors mt-4">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </nav>

        <div className="mt-4 mb-4 bg-white/60 p-3 rounded-2xl flex items-center gap-3 border border-white">
           <div className="w-8 h-8 bg-[#e5f8ec] rounded-lg flex items-center justify-center text-[#35a95b]">
              <Sprout className="w-4 h-4" />
           </div>
           <div>
              <p className="text-[11px] font-bold text-gray-800">AI Assistant</p>
              <p className="text-[10px] text-[#35a95b]">Need help with settings?</p>
           </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition">
            <HelpCircle className="w-3.5 h-3.5" /> Help
          </button>
          <button 
            onClick={onLogout}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 transition"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 rounded-3xl p-6 lg:p-10 relative overflow-y-auto h-[calc(100vh-2rem)] custom-scrollbar space-y-6">
        
        {/* Header */}
        <div className="mb-2 relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">Settings</h1>
          <p className="text-gray-500 text-sm">Update your profile and preferences.</p>
        </div>

        {/* Container 1: Profile & Goals */}
        <div className="bg-[#fcfbfa] rounded-[2rem] p-8 shadow-sm border border-white/50">
          <h2 className="flex items-center gap-2 font-extrabold text-gray-900 text-lg mb-8">
            <Pencil className="w-5 h-5 text-[#35a95b]" /> Profile & Goals
          </h2>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#35a95b]" />
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8ccf32] transition shadow-sm"
                />
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Educational Background / Major</label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#35a95b]" />
                <input
                  type="text"
                  name="educationalBackground"
                  value={profile.educationalBackground}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8ccf32] transition shadow-sm"
                />
              </div>
            </div>

            {/* Target Career Goal */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Target Career Goal / Dream Job</label>
              <div className="relative">
                <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#35a95b]" />
                <input
                  type="text"
                  name="targetCareerGoal"
                  value={profile.targetCareerGoal}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8ccf32] transition shadow-sm"
                />
              </div>
            </div>

            {/* Weekly Study Time */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Weekly Study Time Available</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#35a95b]" />
                <input
                  type="text"
                  name="weeklyStudyTime"
                  value={profile.weeklyStudyTime}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8ccf32] transition shadow-sm"
                />
              </div>
            </div>

            {/* Save Button */}
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className={`w-full py-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2 ${
                saved 
                  ? 'bg-[#e4f7eb] text-[#35a95b] border-2 border-[#8ccf32]' 
                  : 'bg-gradient-to-r from-[#3fb067] to-[#8ccf32] hover:from-[#35a95b] hover:to-[#7dc325] text-white hover:scale-[1.01] active:scale-95'
              }`}
            >
              {isSaving ? (
                <><RefreshCw className="w-4 h-4 animate-spin" /> Saving...</>
              ) : saved ? (
                <><Save className="w-4 h-4" /> Changes Saved!</>
              ) : (
                <><Save className="w-4 h-4" /> Save Changes</>
              )}
            </button>
          </div>
        </div>

        {/* Container 2: Danger Zone */}
        <div className="bg-[#fff5f5] rounded-[2rem] p-8 shadow-sm border border-red-100">
          <h2 className="flex items-center gap-2 font-extrabold text-red-600 text-lg mb-3">
            <AlertTriangle className="w-5 h-5" /> Danger Zone
          </h2>
          <p className="text-red-500 text-sm leading-relaxed mb-6">
            Resetting your services will permanently clear your roadmap, skill data, and uploaded documents. This action cannot be undone.
          </p>
          <button 
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95"
          >
            <RefreshCw className="w-4 h-4" /> Reset All Services
          </button>
        </div>

      </main>

      <ChatBot />
    </div>
  );
}
