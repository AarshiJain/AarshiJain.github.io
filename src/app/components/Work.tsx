import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'The Online Disinhibition Effect',
    description: 'A research study on Echo Chambers on social media platforms.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of a modern shopping experience with enhanced UX.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Intuitive banking interface focusing on accessibility and ease of use.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Health & Wellness Platform',
    description: 'A comprehensive platform for tracking fitness and mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
  }
];

export function Work() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-0.5 w-12 bg-amber-500"></div>
          <h2 className="text-sm tracking-widest text-neutral-500 uppercase">Work</h2>
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-24 max-w-4xl">
          Here are some of my selected projects
        </h3>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      const rect = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is in view
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Distance from center of viewport
      const distance = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;
      
      // Scale from 1.0 to 1.15 based on how centered it is
      const scale = 1 + (1 - Math.min(distance / maxDistance, 1)) * 0.15;
      
      const img = imageElement.querySelector('img');
      if (img) {
        img.style.transform = `scale(${scale})`;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="group cursor-pointer flex flex-col items-center text-center">
      <div 
        ref={imageRef}
        className="w-full max-w-2xl aspect-[16/9] bg-neutral-200 rounded-3xl overflow-hidden mb-6"
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
        />
      </div>
      
      <div className="max-w-2xl">
        <h4 className="text-xl md:text-2xl mb-3">
          {project.title}
        </h4>
        
        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}