import { useState } from 'react';
import { CheckCircle2, Loader2, Save } from 'lucide-react';
import imgImage2 from "/logo.png";
import imgImage5 from "/avatar.png";

export default function MedicalProfile() {
  const [formData, setFormData] = useState({
    age: '', gender: '', nationality: '', height: '', weight: '', bloodGroup: '',
    allergies: '', medicalConditions: '', currentMedications: '',
    smokingHabits: '', drinkingHabits: '', organDonor: '',
    emergencyName: '', emergencyRelation: '', emergencyPhone: ''
  });

  const [submitState, setSubmitState] = useState('default');

  const handleInputChange = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.emergencyName || !formData.emergencyRelation || !formData.emergencyPhone) {
      alert('Please fill in all required emergency contact fields.');
      return;
    }
    setSubmitState('saving');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Medical Profile Data:', formData);
    setSubmitState('success');
    setTimeout(() => setSubmitState('default'), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Header */}
      <header className="w-full py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={imgImage2} alt="MEDWAY" className="h-[120px] w-auto object-contain" />
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-100 overflow-hidden">
            <img src={imgImage5} alt="User Profile" className="w-[40px] h-[40px] object-cover" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#065f2b] mb-4">
            Complete Your Medical Profile
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Provide accurate medical information to help healthcare providers deliver the best possible care
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* General information */}
          <section>
            <h2 className="text-3xl lg:text-4xl text-[#065f2b] mb-8 pl-[20px]">General information</h2>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 px-[35px]">
              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-[#283b3f]">Age:</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-[#283b3f]">Gender:</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Nationality:</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Height:</label>
                <input
                  type="text"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Weight:</label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Blood Group:</label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select blood group</option>
                  {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Health Details */}
          <section>
            <h2 className="text-3xl lg:text-4xl text-[#065f2b] mb-8 pl-[20px]">Health Details</h2>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-[35px]">
              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Allergies:</label>
                <textarea
                  rows={4}
                  value={formData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  className="w-full bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 py-3 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Medical Conditions:</label>
                <textarea
                  rows={4}
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                  className="w-full bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 py-3 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Current Medications:</label>
                <textarea
                  rows={4}
                  value={formData.currentMedications}
                  onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                  className="w-full bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 py-3 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Smoking Habits:</label>
                <select
                  value={formData.smokingHabits}
                  onChange={(e) => handleInputChange('smokingHabits', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select smoking habits</option>
                  <option value="never">Never smoked</option>
                  <option value="former">Former smoker</option>
                  <option value="social">Social smoker</option>
                  <option value="regular">Regular smoker</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Drinking Habits:</label>
                <select
                  value={formData.drinkingHabits}
                  onChange={(e) => handleInputChange('drinkingHabits', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select drinking habits</option>
                  <option value="never">Never drink</option>
                  <option value="rarely">Rarely</option>
                  <option value="socially">Socially</option>
                  <option value="regularly">Regularly</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">Organ Donor:</label>
                <select
                  value={formData.organDonor}
                  onChange={(e) => handleInputChange('organDonor', e.target.value)}
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select organ donor status</option>
                  <option value="yes">Yes, I am an organ donor</option>
                  <option value="no">No, I am not an organ donor</option>
                  <option value="considering">Considering it</option>
                </select>
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section>
            <h2 className="text-3xl lg:text-4xl text-[#065f2b] mb-8 pl-[20px]">Emergency Contact</h2>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 px-[35px]">
              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">
                  Full Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.emergencyName}
                  onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                  required
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">
                  Relation: <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.emergencyRelation}
                  onChange={(e) => handleInputChange('emergencyRelation', e.target.value)}
                  required
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select relationship</option>
                  <option value="spouse">Spouse</option>
                  <option value="parent">Parent</option>
                  <option value="child">Child</option>
                  <option value="sibling">Sibling</option>
                  <option value="friend">Friend</option>
                  <option value="relative">Other Relative</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-2xl lg:text-3xl text-black">
                  Phone: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                  required
                  className="w-full h-[50px] bg-[#ebdbc4] border border-[#283b3f] rounded-[20px] pl-[10px] pr-4 text-lg outline-none focus:ring-2 focus:ring-[#065f2b] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-center pt-[20px] pb-[20px]">
            <button
              type="submit"
              disabled={submitState === 'saving'}
              className={`
                px-8 py-4 rounded-xl text-[20px] transition-all rounded-[40px] duration-300 min-w-[434px] h-[53px]
                flex items-center justify-center space-x-2 shadow-lg
                ${submitState === 'success' ? 'bg-green-600 text-white' : 'bg-[#065f2b] hover:bg-[#044a22] text-[#f7f7f7] hover:scale-105 active:scale-95'}
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              `}
            >
              {submitState === 'saving' && (<span>Saving Profile...</span>)}
              {submitState === 'success' && (<span>Profile Saved Successfully!</span>)}
              {submitState === 'default' && (<span> Save Profile</span>)}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
