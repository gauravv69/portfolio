import WorkGallery from "./components/WorkGallery"

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-12 tracking-tight">
          Selected Work
        </h1>

        <WorkGallery />
      </div>
    </div>
  )
}