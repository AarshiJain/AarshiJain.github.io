import { Triangle } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full px-8 py-2 pb-0 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Triangle className="w-6 h-6 fill-black stroke-black" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-1 bg-neutral-800 rounded-full px-4 py-2">
        <button className="px-3 py-1.5 text-sm text-white transition-colors">
          Home
        </button>
        <button className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors">
          About
        </button>
        <button className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors">
          Works
        </button>
        <button className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors">
          Blog
        </button>
        <button className="px-4 py-1.5 text-sm bg-neutral-200 text-black rounded-full hover:bg-neutral-300 transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
}