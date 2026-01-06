import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Sign from "./pages/Sign.jsx";
import MedicalProfile from "./pages/MedicalProfile.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/medical-profile" element={<MedicalProfile />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
