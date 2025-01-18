import { Link } from "@tanstack/react-router";
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
  return (
    <section
      className="h-[796px] w-full bg-cover bg-center pt-28 max-laptop:h-[691px] max-mobile:h-[566px] max-mobile:px-4 max-mobile:pt-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex flex-col items-center gap-[50px] max-laptop:gap-10 max-mobile:h-[281px]">
        <div className="flex h-[302px] flex-col items-center gap-10 max-laptop:h-[220px] max-laptop:gap-[30px] max-mobile:h-auto max-mobile:w-full">
          <h1 className="h-auto w-full max-w-full text-center text-[60px] font-semibold leading-[81.6px] max-laptop:h-auto max-laptop:text-5xl max-laptop:leading-[57.6px] max-mobile:w-full max-mobile:px-4 max-mobile:text-[24px] max-mobile:leading-[32px]">
            {title}
          </h1>
          {words && (
            <p className="flex h-auto w-full max-w-[90%] flex-wrap items-center justify-center gap-[6px] rounded-md bg-neutral-800/50 px-5 py-[18px] text-[22px] max-laptop:h-[74px] max-laptop:max-w-[80%] max-laptop:px-[30px] max-laptop:py-[18px] max-laptop:text-lg max-mobile:h-auto max-mobile:w-[358px] max-mobile:px-4 max-mobile:py-2 max-mobile:text-base">
              for
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span className="rounded-md bg-neutral-800 px-[14px] py-3 max-laptop:px-[10px] max-laptop:py-2 max-mobile:bg-transparent max-mobile:p-0">
                    {word}
                  </span>
                  {index < words.length - 1 && ","}
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
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-lg leading-6 max-mobile:flex-row max-mobile:gap-2">
          <Link
            to={worksHref}
            className="block rounded-lg bg-neutral-800 px-5 py-3 text-sm font-medium text-white outline outline-1 outline-white transition-all duration-300 hover:bg-neutral-700"
          >
            {worksText}
          </Link>
          <Link
            to={contactHref}
            className="block rounded-lg bg-[#2c70b1] px-5 py-3 text-sm font-medium text-white"
          >
            {contactText}
          </Link>
        </div>
      </div>
    </section>
  );
}
