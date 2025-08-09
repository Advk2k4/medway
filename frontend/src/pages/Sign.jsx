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
          style={{ transform: "translate(700px,12px)" }}
        >
          <img
            src="logo.png"
            alt="Medway Logo"
            className="w-[642px] h-auto object-contain"
          />
        </div>

        {/* Container */}
        <div className="w-full flex rounded-lg overflow-hidden bg-white py-12 px-6 mt-10">
          {/* Left Image */}
          <div className="w-1/2 bg-[#F7F7F7] flex items-center justify-center">
            <img
              src="login.png"
              alt="Signup illustration"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>

          {/* Right Form */}
          <div
            className="w-1/2 px-12 pb-12 pt-6 flex flex-col justify-center items-center"
            style={{ transform: "translateY(91px)" }}
          >
            <Container>
              <div className="w-full" style={{ width: "500px" }}>
                {/* Toggle Buttons */}
                <div className="flex justify-center mt-12 mb-8 -translate-y-[70px]">
                  <div className="bg-[#EBDBC4] rounded-full w-[500px] h-[60px] flex items-center relative shadow-inner">
                    
                    {/* White pill background - positioned for Sign up tab */}
                    <div className="absolute right-[5px] top-1 w-[248px] h-[52px] bg-[#F7F7F7] rounded-full shadow-lg"></div>

                    {/* Log in tab */}
                    <a
                      href="/login"
                      className="flex-1 text-[#065F2B] text-[30px] font-extrabold text-center z-10 no-underline"
                    >
                      Log in
                    </a>

                    {/* Sign up tab (active) */}
                    <div className="flex-1 relative flex justify-center items-center z-10">
                      <span className="text-[#065F2B] text-[30px] font-extrabold text-center whitespace-nowrap">
                        Sign up
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSignUp}
                  className="w-full space-y-[40px] flex flex-col"
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

                  {/* Button */}
                  <div className="mt-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#065F2B] text-black rounded-full transform translate-x-2 translate-y-2"></div>
                      <Button
                        type="submit"
                        variant="primary"
                        className= "text-[25px]  bg-[#065F2B] text-[#F7F7F7]" 
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
