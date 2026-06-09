import React from 'react';
import { 
  Sprout, 
  Sparkles, 
  User, 
  GraduationCap, 
  Target, 
  Clock, 
  Lightbulb,
  Rocket,
  ShieldCheck
} from 'lucide-react';

export default function PageLogin({ onNext }) {
  return (
    <div className="min-h-screen bg-[#d2f3db] flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Background decorations */}
      <div className="fixed top-[10%] left-[10%] w-64 h-64 bg-[#aee449] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[10%] w-64 h-64 bg-[#f8aa18] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-[480px] bg-[#fcfbfa] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden p-6 md:p-8 relative z-10">
        
        {/* Header badges */}
        <div className="flex justify-between items-center mb-6">
          <div className="border border-green-200 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-[#35a95b]" />
            <span className="text-[#35a95b] font-bold tracking-[0.2em] text-[9px] uppercase mt-0.5">Matcha</span>
          </div>
          <div className="w-8 h-8 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Title and subtitle */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-2 leading-tight">
            Brew Your Career Path
          </h1>
          <p className="text-gray-500 text-[13px] leading-relaxed pr-4">
            Tell us a little about your background and goals, and Matcha will shape a personalized growth journey for you.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          {/* Full Name */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Educational Background */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Educational Background / Major
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <GraduationCap className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="e.g. Computer Science, Design, Business" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Target Career Goal */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Target Career Goal / Dream Job
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Target className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="e.g. Product Designer, ML Engineer" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Weekly Study Time */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Weekly Study Time Available
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Clock className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="e.g. 5 hours per week" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-[#fff9ea] border border-[#fde8af] rounded-2xl p-4 mb-6 flex items-start gap-3">
          <div className="mt-0.5">
            <Lightbulb className="w-5 h-5 text-[#f8aa18]" />
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">Personalized onboarding</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">
              We'll tailor your roadmap, skill gaps, and weekly actions to help you grow with confidence.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={onNext}
          className="w-full py-4 bg-gradient-to-r from-[#3fb067] to-[#8ccf32] hover:from-[#35a95b] hover:to-[#7dc325] text-white rounded-xl font-bold text-[15px] shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
        >
          <Rocket className="w-4 h-4" />
          Start My Journey
        </button>

        {/* Secure text */}
        <div className="mt-5 flex items-center justify-center gap-1.5 text-gray-400 text-[11px] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#35a95b]" />
          Your data stays private and secure
        </div>

      </div>
    </div>
  );
}
