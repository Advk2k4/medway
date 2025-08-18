import { useState, memo } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

const LabeledInput = memo(function LabeledInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  options,
  ...rest // <-- forward any extra props like min/max/step/pattern/inputMode
}) {
  const fieldClasses =
    "shrink-0 !w-[230px] sm:!w-[245px] md:!w-[290px] lg:!w-[270px] xl:!w-[290px] !h-[35px] !bg-[#EBDBC4] ml-[10px] rounded-[12px] right-[200px] " +
    "box-border !py-0 !leading-[35px] border-0 border-b-4 border-[#0F5C2A] focus:outline-none !pl-[15px] !mt-[5px]";

  // block e/E +/− in number inputs
  const blockInvalidNumberKeys = (e) => {
    if (type === "number") {
      const invalid = ["e", "E", "+", "-"];
      if (invalid.includes(e.key)) e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-0.5 min-w-0">
      <label
        htmlFor={name}
        className="text-black font-medium text-sm md:text-base mb-0"
      >
        {label}
      </label>

      {Array.isArray(options) && options.length > 0 ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`${fieldClasses} appearance-none block`}
          {...rest}
        >
          <option value="">Select</option>
          {options.map((opt) =>
            typeof opt === "string" ? (
              <option key={opt} value={opt}>{opt}</option>
            ) : (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            )
          )}
        </select>
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className={fieldClasses}
          onKeyDown={blockInvalidNumberKeys}
          {...rest}
        />
      )}
    </div>
  );
});


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
    drinkingHabits: "",   // <-- added
    smokingHabits: "",    // <-- added
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    // sanitize numbers
    if (["age", "height", "weight"].includes(name)) {
      // allow empty (so user can clear), otherwise clamp to >= 0
      const v = value === "" ? "" : String(value).replace(/[^\d.]/g, "");
      return setFormData((prev) => ({ ...prev, [name]: v }));
    }
  
    // digits only for phone
    if (name === "emergencyPhone") {
      const digits = value.replace(/\D/g, "");
      return setFormData((prev) => ({ ...prev, emergencyPhone: digits }));
    }
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Medical profile saved!");
  };

  // Dropdown options
  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
  const nationalityOptions = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic (Czechia)","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City (Holy See)","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];
  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const organDonorOptions = ["Yes", "No", "Prefer not to say"];
  const drinkingHabitsOptions = ["None", "Occasional", "Regular"];
  const smokingHabitsOptions = ["None", "Occasional", "Regular"];

  // You keep generalFields if you want to map them as a block elsewhere
  const generalFields = [
    ["Age", "age", "number"],
    ["Gender", "gender", "text", genderOptions],
    ["Nationality", "nationality", "text", nationalityOptions],
    ["Height (cm)", "height", "number"],
    ["Weight (kg)", "weight", "number"],
    ["Blood Group", "bloodGroup", "text", bloodGroupOptions],
  ];

  // ✅ Fixed commas + options per-row
  // Health Details — row1: Allergies, Medical Conditions, Ongoing Medication
//                   row2: Organ Donor, Drinking Habits, Smoking Habits
const healthFields = [
  ["Allergies", "allergies", "text"],
  ["Medical Conditions", "medicalConditions", "text"],
  ["Ongoing Medication", "ongoingMedication", "text"],
  ["Organ Donor", "organDonor", "text", organDonorOptions],
  ["Drinking Habits", "drinkingHabits", "text", drinkingHabitsOptions],
  ["Smoking Habits", "smokingHabits", "text", smokingHabitsOptions],
];


  const emergencyFields = [
    ["Name", "emergencyName", "text"],
    ["Relation", "emergencyRelation", "text"],
    ["Phone", "emergencyPhone", "tel"],
  ];

  return (
    <Container>
      <div className="w-full bg-white rounded-3xl shadow-sm">
        <div className="w-full p-6 md:p-10 flex justify-center">
          {/* Header */}
          <div className="w-full max-w-[1400px]">
            <div className="flex items-baseline justify-between mb-6">
            <div className="h-6 sm:h-7 md:h-8">
              <img
                src="logo.png"
                alt="Medway Logo"
                className="!h-full !w-auto max-w-[300px] object-contain block relative top-[-20px]"
              />
            </div>
            <img
              src="avatar.png"
              alt="Profile"
              className="h-[55px] w-[55px] relative top-[-40px]"
            />
            </div>

            <h1 className="text-[40px] font-bold text-[#065F2B] text-center">
              Complete Your Medical Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-10 w-full flex flex-col items-center ml-[100px]">
            {/* General Information */}
            <section className="w-full max-w-5xl">
              <h2 className="font-bold text-[#065F2B] mb-6">
                General Information
              </h2>

              <div className="grid grid-cols-3 gap-x-20 gap-y-[15px] justify-center">
                {/* Row 1 */}
                  <LabeledInput
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    min={0}
                    max={120}
                    step={1}
                  />

                  <LabeledInput
                    label="Height (cm)"
                    name="height"
                    type="number"
                    value={formData.height}
                    onChange={handleChange}
                    min={0}
                    max={300}
                    step={1}
                  />

                  <LabeledInput
                    label="Weight (kg)"
                    name="weight"
                    type="number"
                    value={formData.weight}
                    onChange={handleChange}
                    min={0}
                    max={500}
                    step={0.1}
                  />
                {/* Row 2 */}
                <LabeledInput
                  label="Gender"
                  name="gender"
                  type="text"
                  value={formData.gender}
                  onChange={handleChange}
                  options={genderOptions}
                />
                <LabeledInput
                  label="Nationality"
                  name="nationality"
                  type="text"
                  value={formData.nationality}
                  onChange={handleChange}
                  options={nationalityOptions}
                />
                <LabeledInput
                  label="Blood Group"
                  name="bloodGroup"
                  type="text"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  options={bloodGroupOptions}
                />
              </div>
            </section>

            {/* Health Details */}
            <section className="w-full max-w-5xl">
              <h2 className="text-lg md:text-xl font-bold text-[#065F2B] mb-4">
                Health Details
              </h2>
              <div className="grid grid-cols-3 gap-y-[15px] gap-x-20 justify-center">
                {healthFields.map(([label, name, type, options]) => (
                  <LabeledInput
                    key={name}
                    label={label}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    options={options} // pass the correct options
                  />
                ))}
              </div>
            </section>

            {/* Emergency Contact */}
            <section className="w-full max-w-5xl">
              <h2 className="text-lg md:text-xl font-bold text-[#065F2B] mb-2">
                Emergency Contact
              </h2>
              <div className="grid grid-cols-3 gap-20 justify-center">
                {emergencyFields.map(([label, name, type]) => (
                  <LabeledInput
                    key={name}
                    label={label}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </section>

            <div className="w-full h-[40px] flex justify-center mt-[45px] px-[30px]">
              <Button
                type="submit"
                variant="primary"
                className="!w-auto inline-flex text-[20px] items-center text-center text-[#F7F7F7] ml-[-190px] px-[200px]"
              >
                Save Profile
              </Button>
            </div>
                      </form>
          </div>
        </div>
      </div>
    </Container>
  );
}