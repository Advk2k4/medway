import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="MedWay"
              className="h-12 w-auto object-contain"
            />
          </div>
          <span className="text-3xl font-bold text-[#283B3F] tracking-tight">MEDWAY</span>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="px-8 py-3 bg-[#065F2B] text-white rounded-full text-base font-semibold hover:bg-[#054d23] transition-colors">
            Log in
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative pt-32 pb-16 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h1 className="text-[#283B3F] leading-tight">
                <div className="text-[64px] font-normal mb-2">
                  See your doctor.
                </div>
                <div className="text-[#065F2B] text-[80px] font-extrabold leading-[0.95]">
                  Not the waiting room.
                </div>
              </h1>

              <p className="text-[#283B3F] text-[20px] leading-relaxed mt-6 max-w-xl">
                Book, track, and walk in just in time — no more waiting for hours at a clinic.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {/* Row 1 */}
              <FeatureCard
                variant="green"
                text="Book online"
                to="/login"
              />
              <FeatureCard
                variant="beige-purple"
                text="Leave alert"
              />

              {/* Row 2 */}
              <FeatureCard
                variant="beige"
                text="Family mode"
              />
              <FeatureCard
                variant="green"
                text="Track queue"
              />

              {/* Row 3 */}
              <FeatureCard
                variant="green"
                text="Digital Rx"
              />
              <FeatureCard
                variant="beige"
                text="Health profile"
                to="/profile"
              />
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hidden lg:flex justify-end items-start pt-12">
            <div className="relative w-full max-w-[500px]">
              <img
                src="/home3.png"
                alt="Person using MedWay app"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Feature Card Component with variants
function FeatureCard({ variant, text, to }) {
  const variants = {
    green: "bg-[#065F2B] text-white hover:bg-[#054d23]",
    beige: "bg-[#EBDBC4] text-[#283B3F] hover:bg-[#e0cfb8]",
    "beige-purple": "bg-[#EBDBC4] text-[#283B3F] border-4 border-[#9B87F5] hover:bg-[#e0cfb8]"
  };

  const content = (
    <div className={`
      ${variants[variant]}
      rounded-[24px] p-6
      flex items-center justify-center
      min-h-[140px]
      transition-all duration-200
      cursor-pointer
      shadow-sm hover:shadow-md
    `}>
      <span className="text-[24px] font-bold text-center leading-tight">
        {text}
      </span>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}
