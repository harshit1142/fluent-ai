import { Phone } from 'lucide-react';

export function CallScreen() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 py-3">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-sm font-bold text-gray-700">Live Practice</h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-36 h-36 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg mb-8">
          <Phone size={56} className="text-white stroke-[2.5px]" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">Practice Speaking</h2>
        <p className="text-sm text-gray-500 mb-8 text-center max-w-xl">
          Connect with students to practice English speaking
        </p>

        <button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-xl"
          onClick={() => {
            /* placeholder for start action */
          }}
        >
          Start Live Practice
        </button>
      </div>

      <div className="h-24" />
    </div>
  );
}
