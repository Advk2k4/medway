import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function MedicalProfile() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    nationality: "",
    height: "",
    weight: "",
    bloodGroup: "",
    allergies: "",
    medicalConditions: "",
    ongoingMedication: "",
    organDonor: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Medical profile saved!");
  };

  // Unified input size class
  const inputClass = "w-[180px] h-[38px]";

  return (
    <div className="min-h-screen bg-[#F7F7F7] py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 max-w-[900px] mx-auto">
        <img src="logo.png" alt="Medway Logo" className="w-[372px] h-[137px]" />
        <img src="avatar.png" alt="Profile" className="h-[68px] w-[68px] rounded-full" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#065F2B] mb-8 text-center max-w-[900px] mx-auto">
        Complete Your Medical Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-16 max-w-[900px] mx-auto">

        {/* General Info */}
        <div>
          <h2 className="text-xl font-bold text-[#065F2B] mb-8">General Information</h2>

          <div className="grid grid-cols-3 gap-x-24 gap-y-10">
            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Age</label>
              <Input name="age" value={formData.age} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Gender</label>
              <Input name="gender" value={formData.gender} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Nationality</label>
              <Input name="nationality" value={formData.nationality} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Height</label>
              <Input name="height" value={formData.height} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Weight</label>
              <Input name="weight" value={formData.weight} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center space-x-4">
              <label className="w-[100px] text-sm font-medium text-black">Blood Group</label>
              <Input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Health Details */}
        <div>
          <h2 className="text-xl font-bold text-[#065F2B] mb-8">Health Details</h2>
          <div className="grid grid-cols-2 gap-x-24 gap-y-10">
            <div className="flex items-center space-x-4">
              <label className="w-[140px] text-sm font-medium text-black">Allergies</label>
              <Input name="allergies" value={formData.allergies} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[140px] text-sm font-medium text-black">Medical Conditions</label>
              <Input name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[140px] text-sm font-medium text-black">Organ Donor (Yes/No)</label>
              <Input name="organDonor" value={formData.organDonor} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[140px] text-sm font-medium text-black">Ongoing Medication</label>
              <Input name="ongoingMedication" value={formData.ongoingMedication} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h2 className="text-xl font-bold text-[#065F2B] mb-8">Emergency Contact</h2>
          <div className="grid grid-cols-3 gap-x-24 gap-y-10">
            <div className="flex items-center space-x-4">
              <label className="w-[120px] text-sm font-medium text-black">Name</label>
              <Input name="emergencyName" value={formData.emergencyName} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[120px] text-sm font-medium text-black">Relation</label>
              <Input name="emergencyRelation" value={formData.emergencyRelation} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-[120px] text-sm font-medium text-black">Phone</label>
              <Input name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-40 flex justify-center">
          <Button
            type="submit"
            className="bg-[#065F2B] text-white px-4 py-1 rounded-full text-lg font-extrabold hover:bg-green-900 focus:outline-none"
          >
            Save Medical Profile
          </Button>
        </div>
      </form>
    </div>
  );
}

