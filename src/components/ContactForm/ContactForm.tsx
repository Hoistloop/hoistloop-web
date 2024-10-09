import React, { useState } from 'react';

interface ContactFormProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, description, buttonText }) => {
  const [budget, setBudget] = useState(1000);

  return (
    <div className="bg-neutral-900 p-8 rounded-lg max-w-lg mx-auto">
      <form className="space-y-6">
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
                type="text"
                className="w-full h-[33px] bg-transparent text-[#656567] font-barlow font-normal text-[18px] leading-[27px] placeholder-gray-500 border-b-[1px] border-[#333333] focus:outline-none"
                placeholder="Type here"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
