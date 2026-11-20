import { Terminal } from 'lucide-react';

export default function Navbar({ lang, setLang, nav }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#050811]/75 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight group">
          <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </span>
          <span>Kimia<span className="text-cyan-400"> Heidari</span></span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">{nav.about}</a>
          <a href="#skills" className="hover:text-cyan-400 transition">{nav.skills}</a>
          <a href="#experience" className="hover:text-cyan-400 transition">{nav.experience}</a>
          <a href="#education" className="hover:text-cyan-400 transition">{nav.education}</a>
          <a href="#contact" className="hover:text-cyan-400 transition">{nav.contact}</a>
        </div>

      
        <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10">
          {['en', 'de'].map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition cursor-pointer ${
                lang === code
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}