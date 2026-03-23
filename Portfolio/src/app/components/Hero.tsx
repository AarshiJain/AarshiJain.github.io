export function Hero() {
  return (
    <section className="w-full px-8 py-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
        Hi, I am Aarshi
      </h1>
      
      <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mb-8">
        I turn <span className="font-semibold">ideas into design</span> and{' '}
        <span className="font-semibold">manage work</span> that moves people and business.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors text-base">
          View Projects
        </button>
        <button className="px-6 py-3 bg-transparent text-black border-2 border-black rounded-full hover:bg-neutral-100 transition-colors text-base">
          Download Resume
        </button>
      </div>
    </section>
  );
}