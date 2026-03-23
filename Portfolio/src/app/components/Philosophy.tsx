import { useEffect, useRef, useState } from 'react';

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation when section enters viewport
      // progress: 0 (section bottom at viewport bottom) to 1 (section top at viewport top)
      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const scrollProgress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setProgress(scrollProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate values based on scroll progress
  // Delay rectangle growth significantly - user sees "I design solutions" first
  const rectangleProgress = Math.max(0, (progress - 0.45) / 0.55);
  const scale = Math.max(0.05, Math.min(25, 0.05 + rectangleProgress * 30));
  
  // Inner text fades in as rectangle grows
  const innerTextOpacity = Math.max(0, Math.min(1, (rectangleProgress - 0.2) * 2.5));
  
  // Outer text stays visible throughout - never fades out
  const outerTextOpacity = 1;
  
  // Border radius removes as it grows
  const rectangleRadius = Math.max(0, 20 - rectangleProgress * 20);
  
  // Text divergence tied directly to rectangle scale
  // As rectangle grows, text moves out proportionally
  const textDivergence = scale * 80; // Divergence grows with scale

  return (
    <section 
      ref={sectionRef}
      className="w-full h-[200vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-2 py-2">
        {/* Outer text: "I design" and "solutions" that diverge */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: outerTextOpacity }}
        >
          <div className="flex items-center gap-3">
            <span 
              className="text-5xl md:text-6xl lg:text-7xl font-bold transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${textDivergence}px)` }}
            >
              I design
            </span>
            <div className="w-12 h-8"></div>
            <span 
              className="text-5xl md:text-6xl lg:text-7xl font-bold transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${textDivergence}px)` }}
            >
              solutions
            </span>
          </div>
        </div>

        {/* Growing rectangle with inner text */}
        <div 
          className="bg-neutral-900 flex items-center justify-center transition-all duration-300 ease-out"
          style={{ 
            transform: `scale(${scale})`,
            width: '100px',
            height: '50px',
            borderRadius: `${rectangleRadius}px`
          }}
        >
          <p 
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center whitespace-nowrap"
            style={{ 
              opacity: innerTextOpacity,
              transform: `scale(${1 / scale})`
            }}
          >
            And advocate for them.
          </p>
        </div>
      </div>
    </section>
  );
}