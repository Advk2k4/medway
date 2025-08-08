import Container from "../components/Container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      {/* Page wrapper */}
      <div className="w-full bg-[#F7F7F7] min-h-screen">
        {/* Log in pinned to the viewport (extreme top-right) */}
        <div className="absolute top-[50px] right-[40px]">
          <Link to="/login" aria-label="Log in">
            <button className="h-[50px] w-[96px] bg-[#065F2B] text-[#F7F7F7] rounded-full text-sm font-medium hover:bg-[#054d23] transition">
              Log in
            </button>
          </Link>
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-[1280px] px-8 pt-10 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* LEFT*/}
          <div className="md:col-span-7 -ml-[50px]">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="MedWay"
              className="w-[400px] h-auto select-none -ml-[50px]"
              draggable="false"
            />

            {/* Headline + subtext */}
            <div>
              <h1 className="text-[#283B3F] leading-tight">
                <div className="text-[90px]" style={{ fontWeight: "light" }}>
                  See your doctor.
                </div>
                <div
                  className="text-[#065F2B] text-[100px] mt-1"
                  style={{ fontWeight: "bold" }}
                >
                  Not the waiting room.
                </div>
              </h1>

              <p className="text-gray-600 text-[25px] leading-relaxed max-w-xl mt-3">
                Book, track, and walk in just in time — no more waiting for hours at a clinic.
              </p>
            </div>

            {/* Left column wrapper */}
            <div className="relative w-full">
              {/* Features grid */}
<div className="mx-auto inline-grid grid-cols-[auto_auto_auto_auto] gap-x-[25px] gap-y-2">
  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Book online</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[140px]">
      Skip calls, book instantly.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Track queue</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px]">
      Live position and wait updates.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Leave on time</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      Smart alert when it's time to go.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Digital Rx</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      Save and share securely.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Family dashboard</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      Manage multiple family profiles.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Health profile</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      All your data in one place.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Medicine reminders</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      Never miss your medicine schedule.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Lab test results</h3>
    <p className="mt-2 text-base text-gray-700 max-w-[180px] whitespace-normal">
      View your lab results.
    </p>
  </div>
</div>


              {/* CTA aligned with left column */}
              <Link to="/login" className="block mt-10">
                <button className="w-[800px] h-[56px] bg-[#065F2B] text-[#F7F7F7] rounded-[22px] text-[18px] font-semibold hover:bg-[#054d23] transition duration-200">
                  Get started
                </button>
              </Link>
            </div>
          </div>

         {/* RIGHT*/}
<div className="md:col-span-5 flex justify-end items-start">
  <img
    src="/home3.png"
    alt="Using MedWay on mobile"
    className="relative w-full h-full max-w-[700px] h-[520px] top-[-480px] right-[-140px] -mt-[250px]"
    draggable="false"
  />
</div>
        </div>
      </div>
    </Container>
  );
}