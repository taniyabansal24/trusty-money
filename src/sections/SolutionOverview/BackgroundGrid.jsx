export function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sky blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-blue-50/40 to-white"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"></div>
      <div className="absolute -right-64 top-1/3 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute left-1/2 top-2/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
      
      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(14, 165, 233) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(14, 165, 233) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />
    </div>
  );
}

