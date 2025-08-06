import Container from "../components/Container";
import Button from "../components/Button";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#F7F7F7]">
        {/* Left Side */}
        <div className="max-w-xl space-y-6 p-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            See your doctor. <br />
            <span className="text-green-800 font-bold">Not the waiting room.</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Book, track, and walk in just in time — no more waiting for hours at a clinic.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button className="w-full" variant="primary">Book online</Button>
            <Button className="w-full" variant="secondary">Leave alert</Button>
            <Button className="w-full" variant="secondary">Family mode</Button>
            <Button className="w-full" variant="primary">Track queue</Button>
            <Button className="w-full" variant="primary">Digital Rx</Button>
            <Button className="w-full" variant="secondary">Health profile</Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
            src="home.png"
            alt="Doctor waiting room"
            className="w-[90%] max-w-md h-auto object-contain"
        />
        </div>
      </div>
    </Container>
  );
}
