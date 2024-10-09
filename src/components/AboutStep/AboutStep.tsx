export interface AboutProps {
  step: string;
  title: string;
  description: string;
}

export default function AboutStep({ step, title, description }: AboutProps) {
  return (
    <div className="flex h-[517px] flex-col gap-[50px] px-[50px] py-[100px] max-laptop:h-[452px] max-laptop:gap-[40px] max-laptop:px-40 max-laptop:py-80 max-mobile:h-[397px] max-mobile:gap-[30px] max-mobile:px-24 max-mobile:py-40">
      <div className="flex h-[105px] items-center gap-3.5 max-laptop:h-[84px] max-mobile:h-[56px] max-mobile:gap-2.5">
        <p className="text-[130px] font-semibold leading-[130px] max-laptop:text-[95px] max-mobile:text-[75px]">
          {step}
        </p>
        <span className="size-full border-b border-neutral-800 pl-2.5 pt-7">
          <h1 className="text-[38px] font-semibold leading-[57px] max-laptop:text-[26px] max-laptop:leading-[39px] max-mobile:text-[22px] max-mobile:leading-[33px]">
            {title}
          </h1>
        </span>
      </div>
      <p className="h-[162px] text-[18px] leading-[27px] max-laptop:text-[16px] max-laptop:leading-[24px] max-mobile:text-[14px] max-mobile:leading-[21px]">
        {description}
      </p>
    </div>
  );
}
