import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("Logged in user:", user);
      alert("Logged in successfully!");
      // TODO: Redirect or navigate somewhere
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-6 py-8">
      <div className="bg-white rounded-3xl shadow-None flex w-full max-w-7xl h-[700px] overflow-hidden">

        {/* Left side - Illustration */}
        <div className="flex items-center justify-center w-1/2 bg-[#F7F7F7] p-8">
          <img 
            src="login.png" 
            alt="Medical Consultation" 
            className="object-contain w-[115%] h-[115%]" 
          />
        </div>

        {/* Right side - Form */}
        <div className="w-1/2 flex flex-col items-center">

          {/* Logo */}
          <div className="pt-2 pb-2 transform translate-y-[-50px]">
            <img 
              src="logo.png" 
              alt="Medway Logo" 
              className="h-12 object-contain" 
            />
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mt-12 mb-8 -translate-y-[41px]">
            <div className="bg-[#EBDBC4] rounded-full w-[500px] h-[60px] flex items-center relative shadow-none">
              
              <div className="absolute left-[5px] top-1 w-[248px] h-[52px] bg-[#F7F7F7] rounded-full shadow-none"></div>
              
              <div className="flex-1 relative flex justify-center items-center z-10">
                <span className="text-[#065F2B] text-[30px] font-extrabold text-center whitespace-nowrap">
                  Log in
                </span>
              </div>

              <a
                href="/sign"
                className="flex-1 text-[#065F2B] text-[30px] font-bold text-center py-2 hover:text-[#065F2B] z-10 relative no-underline"
              >
                Sign up
              </a>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="w-[75%] max-w-md mt-[35px] px-[47px] space-y-[45px] ">
            <form onSubmit={handleLogin} className="space-y-[65px]">
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
              <Button className="text-[25px]  bg-[#065F2B] text-[#F7F7F7]" type="submit">
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
