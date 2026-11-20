import { Globe, Terminal } from 'lucide-react';

export default function Navbar({ lang, setLang, nav }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#070B14]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span>Kimia<span className="text-cyan-400">.dev</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">{nav.about}</a>
          <a href="#skills" className="hover:text-cyan-400 transition">{nav.skills}</a>
          <a href="#experience" className="hover:text-cyan-400 transition">{nav.experience}</a>
        </div>

        <button
          onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold transition cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'DE' : 'EN'}</span>
        </button>
      </div>
    </nav>
  );
}