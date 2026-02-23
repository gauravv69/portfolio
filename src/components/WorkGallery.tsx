import { works } from "../data/work"
import { useState, useEffect } from "react"

export default function WorkGallery() {
  const [selected, setSelected] = useState<string | null>(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selected])

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-32">
        {works.map((item, index) => (
          <div
            key={item.id}
            className={`group relative cursor-pointer rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-3 transition-all duration-500 hover:border-[#ccff00] hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.3)] ${
              index % 2 === 0 ? "lg:translate-y-12" : "lg:-translate-y-4"
            } ${index % 3 === 1 ? "md:translate-y-16" : ""}`}
            onClick={() => setSelected(item.image)}
          >
            <div className="overflow-hidden rounded-xl aspect-[4/5] bg-neutral-950 relative">
              <div className="absolute inset-0 bg-[#ccff00]/10 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 md:grayscale-[0.8] md:group-hover:grayscale-0 md:group-hover:scale-105"
              />
              
              {/* Brutalist tag */}
              <div className="absolute top-4 right-4 md:-right-24 md:group-hover:right-4 bg-[#ccff00] text-black font-bold font-syne tracking-wider text-[10px] px-3 py-1 uppercase rounded-full rotate-3 transition-all duration-[400ms] ease-out z-20 shadow-lg md:opacity-0 md:group-hover:opacity-100">
                View Project
              </div>
            </div>

            <div className="mt-5 mb-1 px-2 flex justify-between items-end">
              <p className="font-syne font-bold text-lg md:text-xl uppercase tracking-wide text-[#ccff00] md:text-slate-200 md:group-hover:text-[#ccff00] transition-colors leading-tight">
                {item.title}
              </p>
              <span className="text-xs font-medium font-mono border rounded-full px-2.5 py-1 ml-2 shrink-0 border-[#ccff00]/50 text-[#ccff00] md:border-slate-700 md:text-slate-400 md:group-hover:border-[#ccff00]/50 md:group-hover:text-[#ccff00] transition-colors">
                #0{item.id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-50 p-4 md:p-8 cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23ccff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),_pointer]`}
          onClick={() => setSelected(null)}
        >
          <div className="relative animate-in fade-in zoom-in duration-300 max-w-6xl w-full flex justify-center items-center">
            <img
              src={selected}
              className="max-h-[85vh] object-contain rounded-md shadow-[0_0_80px_rgba(204,255,0,0.15)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-16 font-syne text-[#ccff00] font-bold tracking-widest text-xs lg:text-sm uppercase text-center w-full">
              Click anywhere outside to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}