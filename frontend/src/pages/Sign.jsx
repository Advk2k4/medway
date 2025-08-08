import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthTabs from "../components/AuthTabs";

export default function Sign() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Account created successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[auto,1fr] px-4 py-8 md:grid-cols-2 md:grid-rows-1 md:gap-8">
        {/* Left illustration */}
        <div className="relative hidden items-center justify-center md:flex">
          <img
            src="login.png"
            alt="Signup illustration"
            className="h-auto w-full max-w-[720px] object-contain"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-6 flex w-full max-w-md justify-center md:justify-end">
            <img src="logo.png" alt="Medway Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Tabs */}
          <div className="mb-8 flex w-full max-w-md justify-center">
            <AuthTabs />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSignUp}
            className="w-full max-w-md space-y-6 rounded-2xl bg-white p-6 shadow-sm md:bg-transparent md:p-0 md:shadow-none"
          >
            <Input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <Button type="submit" className="text-[18px] md:text-[20px] text-[#F7F7F7]">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
