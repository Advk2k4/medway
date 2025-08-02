import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Sign() {
  return (
    <Container>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Phone Number" type="tel" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button type="submit" variant="primary" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-800 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </Container>
  );
}
