import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      {/* ✅ Login Button */}
      <div className="absolute top-6 right-6 z-50" style={{transform: 'translateY(25px) translateX(1350px)'}}>
        <Link to="/login">
          <button className="!w-[80px] !h-[50px] bg-[#065F2B] text-[#F7F7F7] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#054d23] transition duration-200">
            Log in
          </button>
        </Link>
      </div>
      <div className="relative w-full bg-[#F7F7F7] min-h-screen px-8 pt-10 pb-4">
        {/* Logo + Headline wrapper */}
        <div className="flex flex-col items-start space-y-8">
          
          {/* Logo */}
          <img
            src="/logo.png"
            alt="MedWay Logo"
            className="w-[332px] h-auto"
          />

          {/* Headline and Subtext */}
          <div style={{ transform: 'translateY(-50px) translateX(25px)' }}>
            <h1 className="text-[90px] leading-tight text-[#283B3F]" style={{ fontWeight: "light" }}>
              <div>See your doctor.</div>
              <div className="text-[#065F2B] text-[100px]" style={{ fontWeight: "bold" }}>
                Not the waiting room.
              </div>
            </h1>

            <p className="text-gray-600 text-[25px] leading-relaxed max-w-xl" style={{ transform: 'translateY(-40px)' }}>
              Book, track, and walk in just in time — no more waiting for hours at a clinic.
            </p>
          </div>
        </div>

        {/* Button Grid */}
        <div className="transform translate-y-[-50px] translate-x-[25px]">
          <div className="w-full max-w-[750px] flex justify-between items-start gap-[30px]">
            {/* Left Column */}
            <div className="flex flex-col gap-[40px]">
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#065F2B] text-[#F7F7F7] hover:bg-[#054d23] rounded-[12px]">
                Book online
              </Button>
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#EBDBC4] text-[#283B3F] hover:bg-[#d6c6ad] rounded-[12px]">
                Family mode
              </Button>
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#065F2B] text-[#F7F7F7] hover:bg-[#054d23] rounded-[12px]">
                Digital Rx
              </Button>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[40px]">
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#EBDBC4] text-[#283B3F] hover:bg-[#d6c6ad] rounded-[12px]">
                Leave alert
              </Button>
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#065F2B] text-[#F7F7F7] hover:bg-[#054d23] rounded-[12px]">
                Track queue
              </Button>
              <Button className="!w-[360px] !h-[131px] text-[24px] font-bold bg-[#EBDBC4] text-[#283B3F] hover:bg-[#d6c6ad] rounded-[12px]">
                Health profile
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-[250px] md:w-1/2 flex justify-center md:justify-end items-center mt-10 md:mt-0 transform translate-x-[1000px] translate-y-[-610px]">
          <img
            src="/home.png"
            alt="Person using healthcare app on mobile"
            className="max-w-[600px] h-[600px] object-contain"
          />
        </div>
      </div>
    </Container>
  );
}
