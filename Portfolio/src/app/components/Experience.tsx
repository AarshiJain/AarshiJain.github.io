import { useEffect, useRef } from 'react';

interface ExperienceCard {
  id: number;
  company: string;
  logo: string;
  role: string;
  description: string;
}

const experiences: ExperienceCard[] = [
  {
    id: 1,
    company: 'Accenture Song',
    logo: '🎵',
    role: 'Interaction Design Analyst',
    description: 'Worked on several projects as a Visual, UX, and CX Designer for two years.'
  },
  {
    id: 2,
    company: 'Tata Elxsi',
    logo: '🔷',
    role: 'UX Research Intern',
    description: 'Conducted a thorough research and analysis on existing data and build a trend report.'
  },
  {
    id: 3,
    company: 'Edutinker',
    logo: '⭐',
    role: 'Product Design Intern',
    description: 'Created wireframes and analyzed user flows with MVP approach to create UI designs.'
  },
  {
    id: 4,
    company: "Let's Unbound",
    logo: '🎨',
    role: 'UI/UX Designer',
    description: 'Created high-fidelity UI of an LMS from the point of view of different stakeholders.'
  },
  {
    id: 5,
    company: 'Accenture Song',
    logo: '🎵',
    role: 'Interaction Design Analyst',
    description: 'Worked on several projects as a Visual, UX, and CX Designer for two years.'
  },
  {
    id: 6,
    company: 'Tata Elxsi',
    logo: '🔷',
    role: 'UX Research Intern',
    description: 'Conducted a thorough research and analysis on existing data and build a trend report.'
  },
];

export function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 w-12 bg-amber-500"></div>
          <h2 className="text-sm tracking-widest text-neutral-500 uppercase">Experience</h2>
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-16 max-w-4xl">
          Here are some of the places where I have worked
        </h3>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate cards for infinite scroll effect */}
        {[...experiences, ...experiences].map((exp, index) => (
          <div
            key={`${exp.id}-${index}`}
            className="flex-shrink-0 w-80 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center w-full h-32 mb-8 text-6xl">
              {exp.logo}
            </div>
            
            <h4 className="text-xl mb-2">
              {exp.company}
            </h4>
            
            <p className="text-sm mb-4">
              {exp.role}
            </p>
            
            <p className="text-sm text-neutral-600 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}