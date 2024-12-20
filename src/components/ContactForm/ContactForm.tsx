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
      const formData = {
        fullName,
        email,
        message,
        selectedOptions,
        budget: values,
      };
      console.log("Form submitted:", formData);
      setFullName("");
      setEmail("");
      setMessage("");
      setSelectedOptions([]);
      setValues([0, 50000]);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg border border-gray-700 bg-neutral-900 p-10">
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Full Name and Email Fields */}
        <div className="w-full px-3">
          <div className=" flex flex-wrap">
            <div className="w-full px-3 md:w-1/2">
              <div className="w-full rounded-lg border border-neutral-800 bg-neutral-800/50 p-6">
                <label className="block text-lg font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2 w-full border-b border-neutral-700 bg-transparent text-base text-gray-400 placeholder:text-gray-500 focus:outline-none"
                  placeholder="Type here"
                />
                {formErrors.fullName && (
                  <p className="text-sm text-red-500">{formErrors.fullName}</p>
                )}
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="w-full rounded-lg border border-neutral-800 bg-neutral-800/50 p-6">
                <label className="block text-lg font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full border-b border-neutral-700 bg-transparent text-base text-gray-400 placeholder:text-gray-500 focus:outline-none"
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
          <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-6">
            <label className="block text-lg font-medium text-white">
              How can we help your business?
            </label>
            <p className="mt-2 text-gray-400">
              Select the services you're interested in:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {/* Checkbox options */}
              {[
                { id: "team-integration", label: "Team Integration" },
                { id: "custom-software", label: "Custom Software" },
                { id: "process-automation", label: "Process Automation" },
                { id: "consulting", label: "Business Consulting" },
              ].map(({ id, label }) => (
                <div
                  key={id}
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id={id}
                    className="size-7 appearance-none rounded border border-neutral-700 bg-neutral-800 checked:bg-lime-500"
                    onChange={() => handleCheckboxChange(label)}
                    checked={selectedOptions.includes(label)}
                  />
                  <label
                    htmlFor={id}
                    className="ml-2 text-gray-400"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget range */}
        <div className="w-full px-3">
          <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-6">
            <label className="block text-lg font-medium text-white">
              Your Budget
            </label>
            <div className="mt-4">
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 w-full rounded bg-gray-600"
                    style={{
                      background: getTrackBackground({
                        values,
                        colors: ["#333333", "#9EFF00", "#333333"],
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
                    <div className="size-4 rounded-full bg-lime-500 shadow" />
                    <div className="absolute left-1/2 top-6 -translate-x-1/2  rounded bg-neutral-900 px-2 py-1 text-xs text-gray-400">
                      ${values[index]}
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full px-3">
          <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-6">
            <label className="block text-lg font-medium text-white">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full border-b border-neutral-700 bg-transparent text-base text-gray-400 placeholder:text-gray-500 focus:outline-none"
              placeholder="Type here"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex w-full items-center justify-center px-3">
          <button
            type="submit"
            className="rounded-lg bg-[#9EFF00] font-medium text-black laptop:px-5 laptop:py-3 laptop:text-sm desktop:px-6 desktop:py-4 desktop:text-lg"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
