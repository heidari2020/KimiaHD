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

      
    </section>
  );
}