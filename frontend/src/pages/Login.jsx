import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", phone: "", password: "" });

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Logged in user:", user);
      alert("Logged in successfully!");
    } catch (err) {
      console.error("Login error:", err.message);
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-4 py-8">
      {/* Card */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* FORCE two columns on >=sm; stack on very small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-12">
          {/* LEFT: Illustration */}
          <div className="sm:col-span-6 bg-[#F7F7F7] flex items-center justify-center p-6 sm:p-10">
            <img
              src="login.png"
              alt="Medical Consultation"
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>

          {/* RIGHT: Logo → Tabs → Form */}
          <div className="sm:col-span-6 flex flex-col">
            {/* Logo aligned right in the right column */}
            <div className="px-6 sm:px-12 pt-8 flex justify-center sm:justify-end">
              <img src="logo.png" alt="Medway Logo" className="h-14 w-auto object-contain" />
            </div>

            {/* Tabs centered under logo */}
            <div className="px-6 sm:px-12 pt-6 flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative flex items-center rounded-full bg-[#EBDBC4] p-1">
                  {/* active pill for Log in */}
                  <div
                    className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#F7F7F7] shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
                    aria-hidden
                  />
                  <span className="z-10 flex-1 py-2 text-center text-xl sm:text-2xl font-extrabold text-[#065F2B]">
                    Log in
                  </span>
                  <Link
                    to="/sign"
                    className="z-10 flex-1 py-2 text-center text-xl sm:text-2xl font-extrabold text-[#065F2B]/80 hover:text-[#065F2B]"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>

            {/* Form — constrained width, aligned center within right column */}
            <div className="px-6 sm:px-12 pb-10 pt-6 flex justify-center">
              <form onSubmit={handleLogin} className="w-full max-w-md space-y-8">
                <Input
                  placeholder="Enter your phone number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button className="text-[18px] sm:text-[20px] text-[#F7F7F7]" type="submit">
                  Log in
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
