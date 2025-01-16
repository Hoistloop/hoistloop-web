import { Link } from "@tanstack/react-router";

export interface AboutCTAProps {
  imageUrl: string;
  title: string;
  description: string;
  button: { text: string; link: string };
  header: string;
  subHeader: string;
}

export default function AboutCTA({
  imageUrl,
  title,
  description,
  button,
  header,
  subHeader,
}: AboutCTAProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] border-x border-b border-neutral-800 p-20 max-laptop:h-[349px] max-laptop:gap-10 max-laptop:p-[60px] max-mobile:h-auto">
      <div className="flex w-full items-center gap-10 max-laptop:gap-[30px] max-mobile:flex-col">
        <img
          className="size-[150px] rounded object-cover max-laptop:size-[100px] max-mobile:size-20"
          src={imageUrl}
          alt="image"
        />
        <div className="flex flex-col gap-5 max-laptop:gap-[14px] ">
          <h4 className="text-left text-3xl font-medium max-laptop:text-2xl max-mobile:text-center">
            {title}
          </h4>
          <p className="text-lg font-normal leading-7 max-laptop:text-base max-mobile:text-center">
            {description}
          </p>
        </div>
      </div>

      <div className="flex size-full flex-row items-center justify-between gap-4 rounded-xl border border-neutral-800 px-5 py-6 max-laptop:rounded-[10px] max-laptop:px-[30px] max-laptop:py-[20px] max-mobile:flex-col">
        <span className="text-nowrap text-center text-xl font-normal max-laptop:text-lg">
          {header}
        </span>
        <span className="text-nowrap rounded-lg bg-slate-500 px-5 py-[14px] text-xl font-normal max-laptop:rounded-md max-laptop:px-[14px] max-laptop:py-[10px] max-laptop:text-lg max-mobile:text-wrap max-mobile:text-center">
          {subHeader}
        </span>
        <Link
          to={button.link}
          className="btn bg-[#2c70b1]"
        >
          {button.text}
        </Link>
      </div>
    </div>
  );
}
