import { useState } from 'react';
import { Activity, Code2, Play } from 'lucide-react';

export default function BentoSection({ data }) {
  const [tab, setTab] = useState('api');
  const [latency, setLatency] = useState(42);
  const [reqCount, setReqCount] = useState(1);

  const simulate = () => {
    setLatency(Math.floor(Math.random() * 45) + 18);
    setReqCount((c) => c + 1);
  };

  return (
    <section className="grid lg:grid-cols-12 gap-6">
       
      <div className="lg:col-span-6 grid grid-cols-2 gap-4">
        {data.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition flex flex-col justify-between"
          >
            <span className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </span>
            <span className="text-sm text-slate-400 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>

       
      <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0D1322] border border-white/10 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('api')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition ${
                tab === 'api' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" /> {data.simTitle}
            </button>
            <button
              onClick={() => setTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition ${
                tab === 'code' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" /> BackendEngineer.cs
            </button>
          </div>

          {tab === 'api' && (
            <button
              onClick={simulate}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold cursor-pointer transition"
            >
              <Play className="w-3 h-3" /> {data.simBtn}
            </button>
          )}
        </div>

        {tab === 'api' ? (
          <pre className="text-xs sm:text-sm font-mono text-emerald-300 bg-black/40 p-4 rounded-xl overflow-x-auto border border-white/5">
{`GET /api/v1/health/banking-core  [200 OK]
{
  "engineer": "Kimia Heidari",
  "status": "Healthy",
  "latencyMs": ${latency},
  "uptime": "99.9%",
  "requestsSimulated": ${reqCount}
}`}
          </pre>
        ) : (
          <pre className="text-xs sm:text-sm font-mono text-cyan-200 bg-black/40 p-4 rounded-xl overflow-x-auto border border-white/5">
{`public record BackendEngineer(
    string Name = "Kimia Heidari",
    string Stack = ".NET 8 | C# | SQL Server",
    string Architecture = "DDD & Clean Architecture",
    string Relocation = "Ready for Germany (B2)"
);`}
          </pre>
        )}
      </div>
    </section>
  );
}