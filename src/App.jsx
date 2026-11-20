import { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [lang, setLang] = useState('en');
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const content = resumeData[lang];

  useEffect(() => {
    const onMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden">
     
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.10), transparent 65%)`,
        }}
      />
 
      <div className="fixed inset-0 bg-dot-grid pointer-events-none opacity-80" />
      <div className="fixed -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none" />
      <div className="fixed top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-purple-600/15 blur-[130px] pointer-events-none" />

      <Navbar lang={lang} setLang={setLang} nav={content.nav} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-28">
        <Hero data={content.hero} />
        <BentoSection data={content.bento} />
        <Skills data={content.skills} lang={lang} />
        <Experience data={content.experience} />
        <Education data={content.education} />
        <Contact data={content.contact} email={content.hero.email} />
      </main>
    </div>
  );
}