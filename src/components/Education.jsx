import { GraduationCap, Languages, Award } from 'lucide-react';

export default function Education({ data }) {
  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-extrabold">{data.title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 space-y-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-bold text-white">{data.degree}</h3>
          <p className="text-sm text-slate-300">{data.uni}</p>
          <p className="text-xs font-mono text-cyan-400">{data.period}</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Languages className="w-5 h-5 text-purple-400" />
            </span>
            <h3 className="text-lg font-bold text-white">{data.languagesTitle}</h3>
          </div>
          {data.languages.map((l) => (
            <div key={l.name} className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-white">{l.name}</span>
                <span className="text-slate-400">{l.level}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" style={{ width: l.percent }} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 space-y-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit">
            <Award className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-lg font-bold text-white">{data.certTitle}</h3>
          <p className="text-sm text-slate-400">{data.certIssuer}</p>
        </div>
      </div>
    </section>
  );
}