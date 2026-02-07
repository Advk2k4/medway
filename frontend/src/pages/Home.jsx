import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] relative">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a9 9 0 0 0-9 9c0 5 9 13 9 13s9-8 9-13a9 9 0 0 0-9-9z" />
              <circle cx="12" cy="11" r="3" />
            </svg>
          </div>
          <span className="text-4xl font-bold tracking-tight">MEDWAY</span>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="px-10 py-3.5 bg-[#065F2B] text-white rounded-full text-lg font-medium hover:bg-[#054d23] transition-colors">
            Log in
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-12 pt-8 pb-20 flex items-start justify-between gap-16 max-w-[1600px] mx-auto">
        {/* Left Column - Content */}
        <div className="flex-1 max-w-[800px]">
          {/* Headline */}
          <div className="mb-8">
            <h1 className="leading-[1.1]">
              <div className="text-[72px] font-normal text-gray-800 mb-1">
                See your doctor.
              </div>
              <div className="text-[88px] font-extrabold text-[#065F2B]">
                Not the waiting room.
              </div>
            </h1>

            <p className="text-xl text-gray-700 mt-6 leading-relaxed">
              Book, track, and walk in just in time — no more waiting for hours at a clinic.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-5 mt-16">
            {/* Book online */}
            <Link to="/login" className="block">
              <div className="bg-[#065F2B] text-white rounded-[32px] p-8 h-[160px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-lg">
                <span className="text-[28px] font-bold">Book online</span>
              </div>
            </Link>

            {/* Leave alert */}
            <div className="bg-[#EBDBC4] text-gray-800 rounded-[32px] p-8 h-[160px] flex items-center justify-center border-[5px] border-[#8B7FD5] hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-lg">
              <span className="text-[28px] font-bold">Leave alert</span>
            </div>

            {/* Family mode */}
            <div className="bg-[#EBDBC4] text-gray-800 rounded-[32px] p-8 h-[160px] flex items-center justify-center hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-lg">
              <span className="text-[28px] font-bold">Family mode</span>
            </div>

            {/* Track queue */}
            <div className="bg-[#065F2B] text-white rounded-[32px] p-8 h-[160px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-lg">
              <span className="text-[28px] font-bold">Track queue</span>
            </div>

            {/* Digital Rx */}
            <div className="bg-[#065F2B] text-white rounded-[32px] p-8 h-[160px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-lg">
              <span className="text-[28px] font-bold">Digital Rx</span>
            </div>

            {/* Health profile */}
            <Link to="/profile" className="block">
              <div className="bg-[#EBDBC4] text-gray-800 rounded-[32px] p-8 h-[160px] flex items-center justify-center hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-lg">
                <span className="text-[28px] font-bold">Health profile</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="flex-shrink-0 w-[480px] pt-20">
          <img
            src="/home3.png"
            alt="Person using MedWay app"
            className="w-full h-auto object-contain"
            draggable="false"
          />
        </div>
      </main>
    </div>
  );
}
