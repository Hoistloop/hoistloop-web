import React from "react";

export interface HeaderProps {
  title: string;
  worksText: string;
  contactText: string;
  imageUrl: string;
  contactHref: string;
  worksHref: string;
  description: string;
  words: Array<string>;
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
      className="h-[796px] w-full pt-28 max-laptop:h-[691px] max-mobile:h-[566px] max-mobile:px-4 max-mobile:pt-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className=" flex flex-col items-center gap-[50px] max-laptop:gap-10 max-mobile:h-[281px]">
        <div className="flex h-[302px] flex-col items-center gap-10 max-laptop:h-[220px] max-laptop:gap-[30px] max-mobile:h-[196px] max-mobile:w-[358px]  ">
          <h1
            className="h-[164px] w-[720px] text-center text-[68px] font-semibold leading-[81.6px] max-laptop:h-[116px] max-laptop:text-5xl max-laptop:leading-[57.6px]
            max-mobile:h-[82px] max-mobile:w-fit max-mobile:text-[34px] max-mobile:leading-[40.8px]"
          >
            {title}
          </h1>

          <p className="flex h-[98px] w-[865px] items-center justify-center gap-[6px] rounded-md bg-neutral-800/50 px-10 py-6 text-[22px] max-laptop:h-[74px] max-laptop:w-[699px] max-laptop:px-[30px] max-laptop:py-[18px] max-laptop:text-lg max-mobile:hidden">
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

          <p className="max-desktop:hidden max-desktop:gap-5 max-mobile:flex max-mobile:h-[84px] max-mobile:w-[358px] max-mobile:rounded-[8px] max-mobile:bg-neutral-800/50 max-mobile:px-5 max-mobile:py-[18px] max-mobile:text-center max-mobile:text-base">
            {description}
          </p>
        </div>
        <div className="flex h-[58px] w-[293px] gap-[13px] text-lg leading-[21.6px] max-mobile:h-[45px] max-mobile:w-56 max-mobile:text-sm max-mobile:font-medium max-mobile:leading-[16.8px] ">
          <a
            className="rounded-[10px] bg-neutral-800 px-7 py-[18px] outline outline-1 outline-white max-mobile:h-[45px] max-mobile:w-[103px] max-mobile:gap-[10px] max-mobile:rounded-lg max-mobile:px-5 max-mobile:py-[14px]"
            href={worksHref}
            rel="noreferrer nofollow"
            target="_blank"
          >
            {worksText}
          </a>
          <a
            className=" btn-primary rounded-[10px] px-7 py-[18px] max-mobile:h-[45px] max-mobile:w-[108px] max-mobile:gap-[10px] max-mobile:rounded-lg max-mobile:px-5 max-mobile:py-[14px] "
            href={contactHref}
            rel="noreferrer nofollow"
            target="_blank"
          >
            {contactText}
          </a>
        </div>
      </div>
    </section>
  );
}
