import { Navigation } from './components/Navigation';
import { InteractivePortrait } from './components/InteractivePortrait';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 relative">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <InteractivePortrait />
        <Hero />
        <Experience />
        <Work />
        <Philosophy />
      </div>
    </div>
  );
}