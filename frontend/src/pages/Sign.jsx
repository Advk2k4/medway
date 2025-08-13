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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    } catch (error) {
      console.error("Sign up error:", error.message);
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
            <img src="/login.png" alt="Signup illustration" className="w-full max-w-[760px] h-auto object-contain" />
          </div>

          {/* RIGHT: Logo → Tabs → Form */}
          <div className="col-span-6 flex flex-col items-center justify-center p-6 xl:p-16">
            {/* Logo - Centered */}
            <div className="w-full flex justify-center mb-8">
              <img src="/logo.png" alt="Medway Logo" className="h-20 w-auto object-contain" />
            </div>

            {/* Tabs - Centered */}
            <div className="w-full mb-12">
              <AuthTabs className="max-w-[500px] mx-auto" size="large" />
            </div>

            {/* Form - Centered */}
            <form onSubmit={handleSignUp} className="w-full max-w-[500px] space-y-6">
              <Input type="text" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
              <Input type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} required />
              <Input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} error={errors.email} required />
              <Input type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} error={errors.password} required />
              <Input type="password" placeholder="Confirm password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} required />

              <Button type="submit" className="text-[20px]" loading={isLoading}>
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
