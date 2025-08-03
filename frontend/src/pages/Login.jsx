import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      // Redirect or navigate to dashboard here if needed
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Log in</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
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
