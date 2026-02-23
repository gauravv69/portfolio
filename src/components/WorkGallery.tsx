import { works } from "../data/work"
import { useState } from "react"

export default function WorkGallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900"
            onClick={() => setSelected(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  )
}