import { useState } from 'react';
import { Mail, Check, MapPin, Sparkles, Send } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero({ data }) {
  const [copied, setCopied] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCopy = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    setTilt({ x, y });
  };

  return (
    <section id="about" className="grid lg:grid-cols-12 gap-14 items-center">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          {data.badge}
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">{data.firstName} </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {data.lastName}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-200">{data.role}</p>
          <p className="inline-flex items-center gap-2 text-sm text-cyan-300/90 font-medium">
            <MapPin className="w-4 h-4 text-cyan-400" />
            {data.location}
          </p>
        </div>

        <p className="text-slate-400 leading-relaxed text-base sm:text-lg max-w-2xl">
          {data.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <Send className="w-4 h-4" />
            {data.ctaPrimary}
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm font-semibold text-white transition-all duration-300 cursor-pointer hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-cyan-400" />}
            {copied ? data.copied : data.copyEmail}
          </button>

          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            LinkedIn
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            GitHub
          </a>
        </div>
      </div>
 
      <div className="lg:col-span-5 flex justify-center">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="relative w-72 sm:w-[340px] h-[410px] sm:h-[450px] transition-transform duration-200"
        >
          <div className="absolute -inset-2 rounded-[30px] bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 opacity-40 blur-2xl" />
          <div className="relative w-full h-full rounded-[28px] p-[2px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 shadow-2xl">
            <div className="w-full h-full rounded-[26px] overflow-hidden bg-slate-900">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpeg`}
                alt={data.firstName}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="animate-float absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-cyan-400/40 shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" /> .NET 8 / C#
          </div>
          <div className="animate-float-delayed absolute top-1/3 -left-6 px-3.5 py-2 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-purple-400/40 shadow-xl text-xs font-bold text-purple-300">
            🇩🇪 German B2
          </div>
          <div className="animate-float absolute -bottom-4 right-6 px-3.5 py-2 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-emerald-400/40 shadow-xl text-xs font-bold text-emerald-300">
            5+ Years FinTech
          </div>
        </div>
      </div>
    </section>
  );
}