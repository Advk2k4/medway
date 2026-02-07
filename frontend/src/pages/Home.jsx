import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] relative">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-6">
        {/* Logo - using actual logo image */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="MedWay Logo"
            className="h-14 w-auto object-contain"
          />
          <span className="text-3xl font-bold tracking-tight">MEDWAY</span>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="px-8 py-3 bg-[#065F2B] text-white rounded-full text-base font-semibold hover:bg-[#054d23] transition-colors">
            Log in
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-12 pt-6 pb-20 flex items-start justify-between gap-12 max-w-[1500px] mx-auto">
        {/* Left Column - Content */}
        <div className="flex-1 max-w-[750px]">
          {/* Headline */}
          <div className="mb-8">
            <h1 className="leading-[1.05]">
              <div className="text-[68px] font-normal text-black mb-0">
                See your doctor.
              </div>
              <div className="text-[82px] font-extrabold text-[#065F2B] leading-[0.95]">
                Not the waiting room.
              </div>
            </h1>

            <p className="text-lg text-black mt-5 leading-relaxed">
              Book, track, and walk in just in time — no more waiting for hours at a clinic.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            {/* Book online */}
            <Link to="/login" className="block">
              <div className="bg-[#065F2B] text-white rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-md">
                <span className="text-[26px] font-bold">Book online</span>
              </div>
            </Link>

            {/* Leave alert - NO purple border in reference */}
            <div className="bg-[#EBDBC4] text-black rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-md">
              <span className="text-[26px] font-bold">Leave alert</span>
            </div>

            {/* Family mode */}
            <div className="bg-[#EBDBC4] text-black rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-md">
              <span className="text-[26px] font-bold">Family mode</span>
            </div>

            {/* Track queue */}
            <div className="bg-[#065F2B] text-white rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-md">
              <span className="text-[26px] font-bold">Track queue</span>
            </div>

            {/* Digital Rx */}
            <div className="bg-[#065F2B] text-white rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#054d23] transition-all cursor-pointer shadow-md">
              <span className="text-[26px] font-bold">Digital Rx</span>
            </div>

            {/* Health profile */}
            <Link to="/profile" className="block">
              <div className="bg-[#EBDBC4] text-black rounded-[28px] p-6 h-[140px] flex items-center justify-center hover:bg-[#e0cfb8] transition-all cursor-pointer shadow-md">
                <span className="text-[26px] font-bold">Health profile</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column - Illustration with decorative heart icon */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6 pt-16">
          {/* Decorative heart icon */}
          <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-200">
            <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.5" opacity="0.3" />
            </svg>
          </div>

          {/* Person illustration */}
          <div className="w-[420px]">
            <img
              src="/home3.png"
              alt="Person using MedWay app"
              className="w-full h-auto object-contain"
              draggable="false"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
