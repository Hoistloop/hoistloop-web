import React, { useState } from 'react';

interface ContactFormProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, description, buttonText }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  return (
    <div className="bg-neutral-900 p-8 rounded-lg max-w-lg mx-auto">
      <form className="space-y-6">
        {/* Full Name and Email Fields */}
        <div className="flex flex-wrap -mx-3 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 px-3">
            <div className="w-full h-auto p-[24px_40px] border border-[#262626] rounded-[8px] bg-[#242424] bg-opacity-50">
              <label className="block w-full h-auto text-white font-barlow font-medium text-[22px] leading-[33px]">
                Full Name
              </label>
              <input
                type="text"
                className="w-full h-[33px] bg-transparent text-[#656567] font-barlow font-normal text-[18px] leading-[27px] placeholder-gray-500 border-b-[1px] border-[#333333] focus:outline-none"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="w-full h-auto p-[24px_40px] border border-[#262626] rounded-[8px] bg-[#242424] bg-opacity-50">
              <label className="block w-full h-auto text-white font-barlow font-medium text-[22px] leading-[33px]">
                Email
              </label>
              <input
                type="email"
                className="w-full h-[33px] bg-transparent text-[#656567] font-barlow font-normal text-[18px] leading-[27px] placeholder-gray-500 border-b-[1px] border-[#333333] focus:outline-none"
                placeholder="Type here"
              />
            </div>
          </div>
        </div>

        {/* Why are you contacting us? */}
        <div className="w-full px-3">
          <div className="w-full h-auto p-[24px_40px] border border-[#262626] rounded-[8px] bg-[#242424] bg-opacity-50">
            <label className="block w-full h-auto text-white font-barlow font-medium text-[22px] leading-[33px] mb-4">
              Why are you contacting us?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="web-design"
                    className="h-[28px] w-[28px] appearance-none bg-[#262626] border border-[#333333] rounded-[4px] checked:bg-[#262626] checked:border-[#333333] focus:outline-none focus:ring-0"
                    onChange={() => handleCheckboxChange('Web Design')}
                    checked={selectedOptions.includes('Web Design')}
                  />
                  {/* Check verde */}
                  {selectedOptions.includes('Web Design') && (
                    <svg
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5972 0.0840275C11.8409 0.237203 11.9068 0.547636 11.7443 0.777399L5.38069 9.77735C5.29256 9.90199 5.14981 9.9828 4.99171 9.99756C4.83361 10.0123 4.67682 9.95947 4.56447 9.85355L0.322069 5.85357C0.114974 5.65831 0.114974 5.34173 0.322069 5.14647C0.529165 4.95121 0.864932 4.95121 1.07203 5.14647L4.85703 8.71519L10.8618 0.222702C11.0243 -0.00706126 11.3535 -0.0691479 11.5972 0.0840275Z"
                        fill="#9EFF00"
                      />
                    </svg>
                  )}
                </div>
                <label htmlFor="web-design" className="ml-2 text-gray-400">
                  Web Design
                </label>
              </div>

              <div className="flex items-center">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="collaboration"
                    className="h-[28px] w-[28px] appearance-none bg-[#262626] border border-[#333333] rounded-[4px] checked:bg-[#262626] checked:border-[#333333] focus:outline-none focus:ring-0"
                    onChange={() => handleCheckboxChange('Collaboration')}
                    checked={selectedOptions.includes('Collaboration')}
                  />
                  {/* Check verde */}
                  {selectedOptions.includes('Collaboration') && (
                    <svg
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5972 0.0840275C11.8409 0.237203 11.9068 0.547636 11.7443 0.777399L5.38069 9.77735C5.29256 9.90199 5.14981 9.9828 4.99171 9.99756C4.83361 10.0123 4.67682 9.95947 4.56447 9.85355L0.322069 5.85357C0.114974 5.65831 0.114974 5.34173 0.322069 5.14647C0.529165 4.95121 0.864932 4.95121 1.07203 5.14647L4.85703 8.71519L10.8618 0.222702C11.0243 -0.00706126 11.3535 -0.0691479 11.5972 0.0840275Z"
                        fill="#9EFF00"
                      />
                    </svg>
                  )}
                </div>
                <label htmlFor="collaboration" className="ml-2 text-gray-400">
                  Collaboration
                </label>
              </div>
              <div className="flex items-center">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="mobile-app-design"
                    className="h-[28px] w-[28px] appearance-none bg-[#262626] border border-[#333333] rounded-[4px] checked:bg-[#262626] checked:border-[#333333] focus:outline-none focus:ring-0"
                    onChange={() => handleCheckboxChange('Mobile App Design')}
                    checked={selectedOptions.includes('Mobile App Design')}
                  />
                  {/* Check verde */}
                  {selectedOptions.includes('Mobile App Design') && (
                    <svg
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5972 0.0840275C11.8409 0.237203 11.9068 0.547636 11.7443 0.777399L5.38069 9.77735C5.29256 9.90199 5.14981 9.9828 4.99171 9.99756C4.83361 10.0123 4.67682 9.95947 4.56447 9.85355L0.322069 5.85357C0.114974 5.65831 0.114974 5.34173 0.322069 5.14647C0.529165 4.95121 0.864932 4.95121 1.07203 5.14647L4.85703 8.71519L10.8618 0.222702C11.0243 -0.00706126 11.3535 -0.0691479 11.5972 0.0840275Z"
                        fill="#9EFF00"
                      />
                    </svg>
                  )}
                </div>
                <label htmlFor="mobile-app-design" className="ml-2 text-gray-400">
                  Mobile App Design
                </label>
              </div>
              <div className="flex items-center">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="others"
                    className="h-[28px] w-[28px] appearance-none bg-[#262626] border border-[#333333] rounded-[4px] checked:bg-[#262626] checked:border-[#333333] focus:outline-none focus:ring-0"
                    onChange={() => handleCheckboxChange('Others')}
                    checked={selectedOptions.includes('Others')}
                  />
                  {/* Check verde */}
                  {selectedOptions.includes('Others') && (
                    <svg
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5972 0.0840275C11.8409 0.237203 11.9068 0.547636 11.7443 0.777399L5.38069 9.77735C5.29256 9.90199 5.14981 9.9828 4.99171 9.99756C4.83361 10.0123 4.67682 9.95947 4.56447 9.85355L0.322069 5.85357C0.114974 5.65831 0.114974 5.34173 0.322069 5.14647C0.529165 4.95121 0.864932 4.95121 1.07203 5.14647L4.85703 8.71519L10.8618 0.222702C11.0243 -0.00706126 11.3535 -0.0691479 11.5972 0.0840275Z"
                        fill="#9EFF00"
                      />
                    </svg>
                  )}
                </div>
                <label htmlFor="others" className="ml-2 text-gray-400">
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="w-full px-3">
          <button
            type="submit"
            className="w-full py-3 bg-lime-500 text-gray-900 rounded-lg font-semibold hover:bg-lime-600 transition"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
