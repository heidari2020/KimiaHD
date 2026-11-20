import { useState } from 'react';
import { resumeData } from './data/resumeData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function App() {
  const [lang, setLang] = useState('en');
  const content = resumeData[lang];

  return (
    <div className="relative min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-dot-grid pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} nav={content.nav} />
        
        <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-24">
          <Hero data={content.hero} />
          <BentoSection data={content.bento} />
          <Skills data={content.skills} />
          <Experience data={content.experience} />
        </main>
      </div>
    </div>
  );
}