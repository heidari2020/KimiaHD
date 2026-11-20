import { useState } from 'react';

export default function Skills({ data }) {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? data.categories
      : data.categories.filter((c) => c.name === active);

  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition ${
              active === 'All' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {data.all}
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition ${
                active === cat.name ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cat) => (
          <div key={cat.name} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}