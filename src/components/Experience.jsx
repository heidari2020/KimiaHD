import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="space-y-16">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-cyan-400" /> {data.title}
        </h2>

        <div className="relative border-l border-cyan-500/30 pl-6 sm:pl-8 space-y-10">
          {data.jobs.map((job, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition">
              <span className="absolute -left-[33px] sm:-left-[41px] top-7 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-[#070B14]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-sm text-cyan-400">{job.company} • {job.location}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 w-fit">
                  {job.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.metrics.map((m, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    {m}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {job.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h3 className="text-lg font-bold flex items-center gap-2 text-cyan-400">
            <GraduationCap className="w-5 h-5" /> {data.education.title}
          </h3>
          <p className="font-semibold text-white">{data.education.degree}</p>
          <p className="text-sm text-slate-400">{data.education.uni}</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          {data.education.languages.map((l) => (
            <div key={l.name} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-white">{l.name}</span>
                <span className="text-slate-400">{l.level}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" style={{ width: l.percent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}