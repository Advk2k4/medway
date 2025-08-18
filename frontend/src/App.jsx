import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Sign from "./pages/Sign.jsx";
import MedicalProfile from "./pages/MedicalProfile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/profile" element={<MedicalProfile />} />
    </Routes>
  );
}

export default App;
