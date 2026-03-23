import { useEffect, useRef, useState } from 'react';

export function InteractivePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(4); // Start with center frame

  const frames = [
    "https://i.imgur.com/6EThQW6.png",
    "https://i.imgur.com/PerQcoM.png",
    "https://i.imgur.com/l9vvcO7.png",
    "https://i.imgur.com/2ct2gcw.png",
    "https://i.imgur.com/lFtX87G.png",
    "https://i.imgur.com/vz8NSjs.png",
    "https://i.imgur.com/ltCG28U.png",
    "https://i.imgur.com/w9wRpbN.png",
    "https://i.imgur.com/MEcbvki.png"
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const progress = x / rect.width;

      let index = Math.floor(progress * frames.length);
      index = Math.max(0, Math.min(index, frames.length - 1));

      setCurrentFrame(index);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [frames.length]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center -mt-8"
    >
      <img
        src={frames[currentFrame]}
        alt="Interactive portrait"
        className="w-[95vw] max-w-[2000px] h-auto pointer-events-none block"
      />
    </div>
  );
}