import { useState } from 'react';
import { Mail, Check, ArrowUpRight } from 'lucide-react';

export default function Contact({ data, email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-400/25 text-center space-y-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{data.title}</h2>
      <p className="text-slate-300 max-w-xl mx-auto">{data.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold text-sm transition hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25"
        >
          <Mail className="w-4 h-4" /> {data.btn}
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-semibold text-white transition cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-cyan-400" />}
          {copied ? data.copied : email}
        </button>
      </div>
    </section>
  );
}