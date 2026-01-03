import Container from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col">
      <Container>
        {/* Single unified container with better constraints */}
        <div className="flex-1 w-full min-w-0 mx-auto max-w-screen-2xl">

          {/* Header: Logo (left) + Log in (right) on the SAME line */}

<div className="absolute top-[clamp(1rem,2vw,1rem)] left-[clamp(1rem,0.5vw,0rem)]">
  <img
    src="/logo.png"
    alt="MedWay"
    className="block w-[clamp(12rem,20vw,22rem)] h-auto select-none align-middle"
    draggable="false"
  />
</div>

{/* Login */}
<div className="absolute top-[clamp(1rem,4.2vw,3rem)] right-[clamp(1rem,3vw,2.5rem)]">
  <Link to="/login" aria-label="Log in">
    <button className="h-[clamp(2.5rem,4.2vw,3rem)]
                       px-[clamp(1.1rem,2vw,1.6rem)]
                       bg-[#065F2B] text-[#F7F7F7]
                       rounded-full text-sm font-medium
                       hover:bg-[#054d23] transition">
      Log in
    </button>
  </Link>
</div>


          {/* Main content - constrained and centered */}
          <div className="w-full min-h-0 grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">

            {/* LEFT COLUMN - Text, Features, CTA */}
            <div className="sm:col-span-7 sm:col-start-1 min-w-0">
              {/* Headline + subtext */}
              <div>
                <h1 className="text-[#283B3F] leading-tight">
                  <div className="text-[90px] font-light">
                    See your doctor.
                  </div>
                  <div className="text-[#065F2B] text-[100px] mt-1 font-bold">
                    Not the waiting room.
                  </div>
                </h1>

                <p className="text-gray-600 text-[25px] leading-relaxed max-w-xl mt-3">
                  Book, track, and walk in just in time — no more waiting for hours at a clinic.
                </p>
              </div>

              {/* Features grid + CTA */}
              <div className="relative w-full mt-4">
                <div className="mx-auto inline-grid grid-cols-[auto_auto_auto_auto] gap-x-8 gap-y-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Book online</h3>
                    <p className="mt-2 text-base text-gray-700">Skip calls, book instantly.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Track queue</h3>
                    <p className="mt-2 text-base text-gray-700">Live position and wait updates.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Leave on time</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">Smart alert when it's time to go.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Digital Rx</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">Save and share securely.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Family dashboard</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">Manage multiple family profiles.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Health profile</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">All your data in one place.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Medicine reminders</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">Never miss your medicine schedule.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#283B3F] whitespace-nowrap">Lab test results</h3>
                    <p className="mt-2 text-base text-gray-700 whitespace-normal">View your lab results.</p>
                  </div>

                 <div className="col-span-full mt-8">
  <Link to="/login">
    <Button className="w-full h-[clamp(3rem,4vw,4rem)] bg-[#065F2B] text-[#F7F7F7] rounded-[26px] text-[clamp(1rem,1.5vw,1.25rem)] font-semibold hover:bg-[#054d23] transition duration-200">
      Get started
    </Button>
  </Link>
</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Image */}
            <div className="absolute sm:col-start-8 sm:col-span-5 min-w-0 self-start justify-self-end ">
              <img
                src="/home3.png"
                alt="MedWay Healthcare Interface"
                className="block w-[42vw] max-h-[70vh] h-auto object-contain"
                draggable="false"
              />
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}