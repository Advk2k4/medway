import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <Container>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Log in</h1>
        <form className="space-y-4">
          <Input placeholder="Enter your email" type="email" />
          <Input placeholder="Enter your phone number" type="phone number" />
          <Input placeholder="Enter your password" type="password" />
          <div className="text-right text-sm text-gray-600 hover:underline cursor-pointer">
            Forgot password?
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Log in
          </Button>
        </form>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <a href="/sign" className="text-green-800 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </Container>
  );
}
