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
      <div className="fixed top-[10%] left-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-[#aee449] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-[#f8aa18] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-[480px] bg-[#fcfbfa] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden p-5 sm:p-6 md:p-8 relative z-10">
        
        {/* Header badges */}
        <div className="flex justify-between items-center mb-5">
          <div className="border border-green-200 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-[#35a95b]" />
            <span className="text-[#35a95b] font-bold tracking-[0.2em] text-[9px] uppercase mt-0.5">Matcha</span>
          </div>
          <div className="w-8 h-8 bg-[#8ccf32] rounded-xl flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Title and subtitle */}
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-900 mb-2 leading-tight">
            Mulai Perjalanan Kariermu
          </h1>
          <p className="text-gray-500 text-[13px] leading-relaxed pr-4">
            Ceritakan sedikit tentang latar belakang dan tujuanmu, dan Matcha akan merancang perjalanan pengembangan yang dipersonalisasi untukmu.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="Masukkan nama lengkapmu" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Latar Belakang Pendidikan */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Latar Belakang Pendidikan / Jurusan
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <GraduationCap className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="cth. Ilmu Komputer, Desain, Bisnis" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Target Karier */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Target Karier / Pekerjaan Impian
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Target className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="cth. Product Designer, ML Engineer" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>

          {/* Waktu Belajar Mingguan */}
          <div>
            <label className="block text-[13px] font-bold text-gray-800 mb-1.5">
              Waktu Belajar Mingguan
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Clock className="w-4 h-4 text-[#35a95b]" />
              </div>
              <input 
                type="text" 
                placeholder="cth. 5 jam per minggu" 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8ccf32] focus:border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-[#fff9ea] border border-[#fde8af] rounded-2xl p-4 mb-5 flex items-start gap-3">
          <div className="mt-0.5">
            <Lightbulb className="w-5 h-5 text-[#f8aa18]" />
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">Onboarding yang dipersonalisasi</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">
              Kami akan menyesuaikan peta jalan, kesenjangan skill, dan tindakan mingguan untuk membantumu berkembang dengan percaya diri.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={onNext}
          className="w-full py-4 bg-gradient-to-r from-[#3fb067] to-[#8ccf32] hover:from-[#35a95b] hover:to-[#7dc325] text-white rounded-xl font-bold text-[15px] shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
        >
          <Rocket className="w-4 h-4" />
          Mulai Perjalananku
        </button>

        {/* Secure text */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-gray-400 text-[11px] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#35a95b]" />
          Data kamu tetap privat dan aman
        </div>

      </div>
    </div>
  );
}
