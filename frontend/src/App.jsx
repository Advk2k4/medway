import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import MedicalProfile from "./pages/MedicalProfile";
import EmailVerification from "./pages/EmailVerification";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/profile" element={<MedicalProfile />} />
      <Route path="/medical-profile" element={<MedicalProfile />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
