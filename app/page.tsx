'use client'
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar with its own background */}
      <div 
        className="w-full"
        style={{
          background: `radial-gradient(circle at 25% 35%, #00629B 0%, #00497A 40%, #00325B 70%, #001F33 90%)`,
        }}
      >
        <Navbar />
      </div>

      {/* Main content area - completely blank */}
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              SCMS Dashboard
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This is a blank page to test the navbar. The navbar is separate from the page content.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Navbar Test Area</h2>
              <p className="text-gray-600">
                Click on the navigation links to test the routing and active states. 
                The navbar has its own background and is completely separate from this page content.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}