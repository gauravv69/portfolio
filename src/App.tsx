import WorkGallery from "./components/WorkGallery"
import GradualBlur from "./components/GradualBlur"

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 overflow-hidden selection:bg-[#ccff00] selection:text-black relative">
      {/* Marquee Header */}
      <div className="w-full bg-[#ccff00] text-black py-2 overflow-hidden flex whitespace-nowrap border-b-4 border-black font-syne font-bold uppercase tracking-widest text-sm relative z-20">
        <div className="flex animate-marquee min-w-max">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="mx-4 flex items-center gap-4">
              <span>CREATIVE VISIONARY</span>
              <span>✦</span>
              <span>DIGITAL ARTIST</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#ccff00] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none" />

        {/* Logo / Header */}
        <div className="relative z-20 mb-12 md:mb-16">
          <img 
            src="/logo.svg" 
            alt="Artist Logo" 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 transition-transform cursor-pointer" 
          />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 relative z-10 w-full mt-10">
          <div className="w-full">
            <h1 className="font-syne text-[9vw] leading-[1.1] sm:text-[4rem] md:text-[7rem] font-extrabold tracking-tighter mb-4 w-full">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 whitespace-nowrap">
                NOT UR 
              </span>
              <span className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap whitespace-nowrap">
                AVERAGE
                <div className="inline-block shrink-0 w-[8vw] h-[8vw] sm:w-12 sm:h-12 md:w-24 md:h-24 bg-[#ccff00] rounded-full animate-float flex items-center justify-center text-black text-[4vw] sm:text-2xl md:text-5xl border-2 border-black ml-2 mt-2 md:mt-0">
                  ✦
                </div>
              </span>
              <span className="block text-[#ccff00] italic pr-4 whitespace-nowrap">
                PORTFOLIO.
              </span>
            </h1>
          </div>
          <div className="max-w-xs text-slate-400 mt-8 md:mt-0 font-medium md:text-right text-lg shrink-0">
            <p>Welcome to my digital scrapbook. Blending code, culture, and pure unadulterated chaos.</p>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-16 mt-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-syne text-3xl font-bold uppercase tracking-tight">Selected Archives</h2>
            <div className="hidden md:flex gap-2">
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/40"></span>
              <span className="w-3 h-3 rounded-full bg-[#ccff00]"></span>
            </div>
          </div>
          <WorkGallery />
        </div>
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="10rem"
        strength={3}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  )
}