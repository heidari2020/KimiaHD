import { useState, useEffect } from 'react';
import { Server, Layers, Database, Zap, ShieldCheck, Layout } from 'lucide-react';

const ICON_MAP = {
  server: Server,
  layers: Layers,
  database: Database,
  zap: Zap,
  shield: ShieldCheck,
  layout: Layout,
};

export default function Skills({ data, lang }) {
  const [active, setActive] = useState('All');

  useEffect(() => {
    setActive('All');
  }, [lang]);

  const filtered = active === 'All' ? data.categories : data.categories.filter((c) => c.name === active);

  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight">{data.title}</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition ${
              active === 'All' ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/25' : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {data.all}
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition ${
                active === cat.name ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/25' : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Server;
          return (
            <div key={cat.name} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </span>
                <h3 className="font-bold text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-xs font-medium text-slate-200 transition">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}