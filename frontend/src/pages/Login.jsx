import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthTabs from "../components/AuthTabs";

export default function Login() {
  const [formData, setFormData] = useState({ 
    email: "", 
    phone: "", 
    password: "" 
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[1500px] bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-12">
          {/* LEFT: Illustration */}
          <div className="col-span-6 bg-[#F7F7F7] flex items-center justify-center p-8 xl:p-14">
            <img src="/login.png" alt="Medical Consultation" className="w-full max-w-[760px] h-auto object-contain" />
          </div>

          {/* RIGHT: Logo → Tabs → Form */}
<div className="col-span-6 flex flex-col items-center justify-start p-6 xl:p-16">

  {/* Logo */}
  <div className="w-full flex justify-center mb-6 mt-4">
    <img src="/logo.png" alt="Medway Logo" className="h-24 w-auto object-contain" />
  </div>
  {/* Tabs (centered, same width as form) */}
  <div className="w-full mb-8 mt-[30px]">
    <div className="w-full max-w-[560px] mx-auto">
      <AuthTabs size="large" />
    </div>
  </div>

  {/* Form (centered, same width as tabs) */}
  <form
    onSubmit={handleLogin}
    className="w-full max-w-[560px] mx-auto flex flex-col min-h-[500px]"
  >
    <div className="flex flex-col gap-[30px] justify-between mt-[40px]">
    <Input
      placeholder="Enter your phone number"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="px-4"
      required
    />
    <Input
      placeholder="Enter your email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="px-4"
      required
    />
    <Input
      placeholder="Enter Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="px-4"
      required
    />
  </div>

<Button type="submit" className="w-full h-[65px] text-[#F7F7F7] text-[22px] font-bold mt-[70px]">
  Log in
</Button>
</form>
  {/* Tabs (centered, same width as form) */}
  <div className="w-full mb-8 mt-[30px]">
    <div className="w-full max-w-[560px] mx-auto">
      <AuthTabs size="large" />
    </div>
  </div>

  {/* Form (centered, same width as tabs) */}
  <form
    onSubmit={handleLogin}
    className="w-full max-w-[560px] mx-auto flex flex-col min-h-[500px]"
  >
    <div className="flex flex-col gap-[30px] justify-between mt-[40px]">
    <Input
      placeholder="Enter your phone number"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="px-4"
      required
    />
    <Input
      placeholder="Enter your email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="px-4"
      required
    />
    <Input
      placeholder="Enter Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="px-4"
      required
    />
  </div>

<Button type="submit" className="w-full h-[65px] text-[#F7F7F7] text-[22px] font-bold mt-[70px]">
  Log in
</Button>
</form>

          </div>
        </div>
      </div>
    </div>
  );
}