import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function FaqItem({
  question,
  response,
  index,
  className,
}: {
  className?: string;
  question: string;
  response: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col border-b border-b-[#2E2E2E] transition-all duration-75 mobile:px-[30px] mobile:py-[24px] laptop:px-10 laptop:py-[30px] desktop:px-[50px] desktop:py-8 ${className}`}
    >
      <div className="mb-5 flex">
        <div className="mr-[30px]">
          <div className="rounded-lg bg-[linear-gradient(180deg,#2E2E2E_100%,#2E2E2E_0%)] p-px">
            <div className="mb-10 flex items-center justify-center rounded-lg bg-[linear-gradient(180deg,#242424_100%,#242424_0%)] mobile:mb-0 mobile:size-[52px] laptop:size-[62px] desktop:size-[88px] [&>svg]:h-10 mobile:[&>svg]:h-[26px] laptop:[&>svg]:h-[30px]">
              <p
                className={`mobile:text-xl laptop:text-2xl desktop:text-[28px] ${
                  open ? "text-[#C5FF66]" : null
                }`}
                data-testid="faq-index"
              >
                {index <= 9 ? `0${index}` : index}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-y-5">
          <div
            className={`cursor-pointer justify-center mobile:mt-0 mobile:text-base laptop:text-lg desktop:text-[22px]
              ${open ? "open text-[#C5FF66]" : null}`}
            onClick={() => setOpen(!open)}
            data-testid="faq-question"
          >
            {question}
          </div>
        </div>
        <div
          className="flex cursor-pointer items-center "
          onClick={() => setOpen(!open)}
          data-testid="faq-icon"
        >
          <PlusIcon
            className={`transition-all duration-75 mobile:size-6 laptop:size-8 desktop:size-10 ${
              open ? "rotate-45 text-[#C5FF66]" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 mobile:ml-0 mobile:text-sm laptop:ml-24 laptop:text-base desktop:text-lg${
          open
            ? "block max-h-[1000px]"
            : "hidden max-h-0 overflow-y-hidden opacity-0"
        }`}
      >
        {response}
      </div>
    </div>
  );
}
