import { useState, useEffect } from 'react';
import { Activity, Code2, Play, RefreshCw } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>;
}

export default function BentoSection({ data }) {
  const [tab, setTab] = useState('api');
  const [loading, setLoading] = useState(false);
  const [apiState, setApiState] = useState({
    latency: 34,
    hits: 1,
    traceId: 'req_8f92a1c4',
    time: new Date().toISOString().split('T')[1].slice(0, 8),
  });


  return (
    <section className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-6 grid grid-cols-2 gap-4">
        {data.stats.map((s, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 ${s.border} transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] flex flex-col justify-between`}
          >
            <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
              <AnimatedCounter target={s.target} suffix={s.suffix} decimals={s.decimals || 0} />
            </span>
            <span className="text-sm font-medium text-slate-400 mt-3">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0A1020] border border-white/10 hover:border-cyan-400/30 transition flex flex-col justify-between shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex gap-2">
           
            <button
              onClick={() => setTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition 
             bg-purple-500/20 text-purple-300 border border-purple-500/40 
               `}
            >
              <Code2 className="w-3.5 h-3.5" /> {data.codeTab}
            </button>
          </div>

        
        </div>

    
          <div className="font-mono text-xs sm:text-sm bg-[#050811] p-4 rounded-xl border border-white/10 overflow-x-auto leading-6">
            <div><span className="text-purple-400">public sealed record</span> <span className="text-cyan-300 font-bold">BackendEngineer</span><span className="text-slate-400">(</span></div>
            <div className="pl-4"><span className="text-blue-400">string</span> Name = <span className="text-emerald-400">"Kimia Heidari"</span>,</div>
            <div className="pl-4"><span className="text-blue-400">string</span> CoreStack = <span className="text-emerald-400">".NET 8 | C# | SQL Server"</span>,</div>
            <div className="pl-4"><span className="text-blue-400">string</span> Architecture = <span className="text-emerald-400">"DDD & Clean Architecture"</span>,</div>
            <div className="pl-4"><span className="text-blue-400">bool</span> ReadyForGermany = <span className="text-amber-300">true</span> <span className="text-slate-500">// German B2</span></div>
            <div className="text-slate-400">);</div>
          </div>
       
      </div>
    </section>
  );
}