import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Sign() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    <div className="min-h-screen bg-[#F7F7F7] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-6xl relative">
        {/* Logo */}
        <div
          className="absolute top-0 right-0 -mt-16 z-10 w-1/2 flex justify-end"
          style={{ transform: "translate(700px,30px)" }}
        >
          <img
            src="/medwaylogo.png"
            alt="Medway Logo"
            className="w-[700px] h-auto object-contain"
          />
        </div>

        {/* Container */}
        <div className="w-full flex rounded-lg overflow-hidden shadow-xl bg-white py-12 px-6 mt-10">
          {/* Left Image */}
          <div className="w-1/2 bg-[#F7F7F7] flex items-center justify-center">
            <img
              src="/signup.png"
              alt="Signup illustration"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>

          {/* Right Form */}
          <div
            className="w-1/2 px-12 pb-12 pt-6 flex flex-col justify-center items-center"
            style={{ transform: "translateY(100px)" }}
          >
            <Container>
              <div className="w-full" style={{ width: "500px" }}>
                {/* Toggle Buttons */}
                <div className="flex justify-center mt-4 mb-8" style={{ transform: "translateY(-50px)" }}>
                  <div className="relative w-[375px] h-[62px] bg-[#EBDBC4] rounded-full flex items-center justify-between px-2 shadow-inner border border-[#EBDBC4]">
                    
                    {/* Log in */}
                    <a
                      href="/login"
                      className="flex-1 text-[#065F2B] text-xl font-bold underline text-center pl-14 z-10"
                    >
                      Log in
                    </a>

                    {/* Sign up (active) */}
                    <div className="flex-1 relative flex justify-center items-center z-10">
                      <div className="absolute w-[180px] h-[56px] bg-[#F7F7F7] rounded-full shadow-md z-0 transition-all duration-300 ease-in-out"></div>
                      <div className="relative text-[#065F2B] text-[22px] font-extrabold text-center z-10">
                        Sign up
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSignUp}
                  className="w-full space-y-[40px] flex flex-col"
                >
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#065F2B] pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#065F2B]"
                  />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#065F2B] pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#065F2B]"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#065F2B] pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#065F2B]"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#065F2B] pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#065F2B]"
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#065F2B] pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#065F2B]"
                  />

                  {/* Button */}
                  <div className="mt-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#F7F7F7] rounded-full transform translate-x-2 translate-y-2"></div>
                      <Button
                        type="submit"
                        variant="primary"
                        className="relative w-full bg-[#065F2B] hover:bg-[#054520] text-[#F7F7F7] rounded-full shadow-sm py-4 text-[25px] font-black"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
