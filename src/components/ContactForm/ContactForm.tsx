import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

interface ContactFormProps {
  buttonText: string;
}
const STEP = 100;
const MIN = 0;
const MAX = 50000;

const ContactForm: React.FC<ContactFormProps> = ({ buttonText }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [values, setValues] = useState([0, 50000]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{
    fullName?: string;
    email?: string;
  }>({});

  const handleRangeChange = (values: number[]) => {
    setValues(values);
    const rangeInput = document.getElementById("budget-range");
    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4ade80 0%, #4ade80 ${((values[0] - MIN) / (MAX - MIN)) * 100
        }%, #333333 ${((values[0] - MIN) / (MAX - MIN)) * 100}%, #333333 ${((values[1] - MIN) / (MAX - MIN)) * 100
        }%, #4ade80 ${((values[1] - MIN) / (MAX - MIN)) * 100}%, #4ade80 100%)`;
    }
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option],
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { fullName?: string; email?: string } = {};

    // Simple validation
    if (!fullName) errors.fullName = "Full Name is required";
    if (!email) errors.email = "Email is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit form data
      const formData = {
        fullName,
        email,
        message,
        selectedOptions,
        budget: values,
      };
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFullName("");
      setEmail("");
      setMessage("");
      setSelectedOptions([]);
      setValues([0, 50000]);
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-neutral-900 p-8">
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Full Name and Email Fields */}
        <div className="w-full px-3">
          <div className="-mx-3 flex flex-wrap ">
            <div className="w-full flex-1 px-3 md:w-1/2 ">
              <div className="h-auto w-full rounded-[8px] border border-[#262626] bg-[#242424] bg-opacity-50 p-[24px_40px]">
                <label className="font-barlow block h-auto w-full text-[22px] font-medium leading-[33px] text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="font-barlow h-[33px] w-full border-b-[1px] border-[#333333] bg-transparent text-[18px] font-normal leading-[27px] text-[#656567] placeholder-gray-500 focus:outline-none"
                  placeholder="Type here"
                />
                {formErrors.fullName && (
                  <p className="text-sm text-red-500">{formErrors.fullName}</p>
                )}
              </div>
            </div>
            <div className="w-full  flex-1 px-3 md:w-1/2">
              <div className="h-auto w-full rounded-[8px] border border-[#262626] bg-[#242424] bg-opacity-50 p-[24px_40px]">
                <label className="font-barlow block h-auto w-full text-[22px] font-medium leading-[33px] text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-barlow h-[33px] w-full border-b-[1px] border-[#333333] bg-transparent text-[18px] font-normal leading-[27px] text-[#656567] placeholder-gray-500 focus:outline-none"
                  placeholder="Type here"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Why are you contacting us? */}
        <div className="w-full px-3">
          <div className="h-auto w-full rounded-[8px] border border-[#262626] bg-[#242424] bg-opacity-50 p-[24px_40px]">
            <label className="font-barlow mb-4 block h-auto w-full text-[22px] font-medium leading-[33px] text-white">
              Why are you contacting us?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Checkbox options */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="web-design"
                  className="h-[28px] w-[28px] appearance-none rounded-[4px] border border-[#333333] bg-[#262626] checked:bg-lime-500"
                  onChange={() => handleCheckboxChange("Web Design")}
                  checked={selectedOptions.includes("Web Design")}
                />
                <label
                  htmlFor="web-design"
                  className="ml-2 text-gray-400"
                >
                  Web Design
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="collaboration"
                  className="h-[28px] w-[28px] appearance-none rounded-[4px] border border-[#333333] bg-[#262626] checked:bg-lime-500"
                  onChange={() => handleCheckboxChange("Collaboration")}
                  checked={selectedOptions.includes("Collaboration")}
                />
                <label
                  htmlFor="collaboration"
                  className="ml-2 text-gray-400"
                >
                  Collaboration
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="mobile-app-design"
                  className="h-[28px] w-[28px] appearance-none rounded-[4px] border border-[#333333] bg-[#262626] checked:bg-lime-500"
                  onChange={() => handleCheckboxChange("Mobile App Design")}
                  checked={selectedOptions.includes("Mobile App Design")}
                />
                <label
                  htmlFor="mobile-app-design"
                  className="ml-2 text-gray-400"
                >
                  Mobile App Design
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="others"
                  className="h-[28px] w-[28px] appearance-none rounded-[4px] border border-[#333333] bg-[#262626] checked:bg-lime-500"
                  onChange={() => handleCheckboxChange("Others")}
                  checked={selectedOptions.includes("Others")}
                />
                <label
                  htmlFor="others"
                  className="ml-2 text-gray-400"
                >
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Budget range */}
        <div className="w-full px-3">
          <div className="h-auto min-h-[180px] w-full rounded-[8px] border border-[#262626] bg-[#242424] bg-opacity-50 p-[24px_40px]">
            <label className="font-barlow mb-4 block h-auto w-full text-[22px] font-medium leading-[33px] text-white">
              Your Budget
            </label>
            <div className="grid gap-5">
              <div className="flex w-full items-center">
                <label
                  htmlFor="budget-range"
                  className="w-full text-gray-400"
                >
                  Slide to indicate your budget range
                </label>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Range
                  values={values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={handleRangeChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "5px",
                        width: "100%",
                        background: getTrackBackground({
                          values,
                          colors: ["#333333", "#9EFF00", "#333333"], // Colors outside and between thumbs
                          min: MIN,
                          max: MAX,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, index }) => (
                    <div
                      {...props}
                      className="relative"
                    >
                      <div
                        className="rounded-full bg-lime-500"
                        style={{
                          height: "16px",
                          width: "16px",
                          boxShadow: "0px 2px 2px #4C4C4D",
                        }}
                      />
                      <div className="absolute left-1/2 top-6 -translate-x-1/2 transform text-xs text-gray-400">
                        ${values[index]}
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full px-3">
          <div className="h-auto w-full rounded-[8px] border border-[#262626] bg-[#242424] bg-opacity-50 p-[24px_40px]">
            <label className="font-barlow block h-auto w-full text-[22px] font-medium leading-[33px] text-white">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="font-barlow h-[100px] w-full border-b-[1px] border-[#333333] bg-transparent text-[18px] font-normal leading-[27px] text-[#656567] placeholder-gray-500 focus:outline-none"
              placeholder="Type here"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full px-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-lime-500 py-3 font-semibold text-gray-900 transition hover:bg-lime-600"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
