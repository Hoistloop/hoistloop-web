import { useNavigate } from "@tanstack/react-router";
import React from "react";

export interface HeaderProps {
  title: string;
  worksText: string;
  contactText: string;
  imageUrl: string;
  contactHref: string;
  worksHref: string;
  description?: string;
  words?: Array<string>;
}

export default function Header({
  imageUrl,
  title,
  worksText,
  contactText,
  contactHref,
  worksHref,
  description,
  words,
}: HeaderProps) {
  const navigate = useNavigate();
  return (
    <section
      className="h-[796px] w-full bg-cover bg-center pt-28 max-laptop:h-[691px] max-mobile:h-[566px] max-mobile:px-4 max-mobile:pt-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className=" flex flex-col items-center gap-[50px] max-laptop:gap-10 max-mobile:h-[281px]">
        <div className="flex h-[302px] flex-col items-center gap-10 max-laptop:h-[220px] max-laptop:gap-[30px] max-mobile:h-[196px] max-mobile:w-[358px]  ">
          <h1 className="h-[164px] w-auto max-w-[90%] text-center text-[60px] font-semibold leading-[81.6px] max-laptop:h-[116px] max-laptop:text-5xl max-laptop:leading-[57.6px] max-mobile:h-[82px] max-mobile:max-w-full max-mobile:text-[34px] max-mobile:leading-[40.8px]">
            {title}
          </h1>
          {words && (
            <p className="flex h-[98px] w-auto max-w-[90%] items-center justify-center gap-[6px] rounded-md bg-neutral-800/50 px-10 py-6 text-[22px] max-laptop:h-[74px] max-laptop:max-w-[80%] max-laptop:px-[30px] max-laptop:py-[18px] max-laptop:text-lg max-mobile:hidden">
              for
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span className="rounded-md bg-neutral-800 px-[14px] py-3 max-laptop:px-[10px] max-laptop:py-2">
                    {word}
                  </span>
                  {index < words.length - 2 && ","}
                  {index === words.length - 2 && " and"}
                </React.Fragment>
              ))}
            </p>
          )}
          {description && (
            <p className="max-desktop:hidden max-desktop:gap-5 max-mobile:flex max-mobile:h-[84px] max-mobile:w-[358px] max-mobile:rounded-[8px] max-mobile:bg-neutral-800/50 max-mobile:px-5 max-mobile:py-[18px] max-mobile:text-center max-mobile:text-base">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-lg leading-6 max-mobile:flex-col max-mobile:gap-2">
          <button
            onClick={() => navigate({ to: worksHref })}
            className=" rounded-lg bg-neutral-800 py-3 text-center outline outline-1 outline-white transition-all duration-300 hover:bg-neutral-700 max-mobile:px-4 max-mobile:py-2 max-mobile:text-sm laptop:px-5 desktop:py-4 desktop:text-lg"
          >
            {worksText}
          </button>
          <button
            onClick={() => navigate({ to: contactHref })}
            className=" rounded-lg bg-[#9EFF00] font-medium text-black laptop:px-5 laptop:py-3 laptop:text-sm desktop:px-6 desktop:py-4 desktop:text-lg"
          >
            {contactText}
          </button>
        </div>
      </div>
    </section>
  );
}
