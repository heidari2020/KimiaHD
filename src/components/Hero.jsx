import { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <section id="about" className="grid lg:grid-cols-12 gap-12 items-center pt-8">
      
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {data.badge}
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-300">{data.role}</p>
        </div>

        <p className="text-slate-400 leading-relaxed text-base sm:text-lg max-w-2xl">
          {data.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            {copied ? data.copied : data.copyEmail}
          </button>

          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-center">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="relative w-72 sm:w-80 h-[400px] sm:h-[430px] rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 transition-transform duration-200 shadow-2xl shadow-cyan-500/20"
        >
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent" />
            <div className="absolute bottom-4 inset-x-4 flex flex-wrap gap-2">
              {data.floatingBadges.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white"
                >
                  <Sparkles className="w-3 h-3 text-cyan-300" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}