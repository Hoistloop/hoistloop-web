export interface AboutProps {
  step: string;
  title: string;
  description: string;
}

export default function AboutStep({ step, title, description }: AboutProps) {
  return (
    <div className="flex h-[463px] flex-col gap-[50px] px-[50px] py-[100px] max-laptop:h-[402px] max-laptop:gap-10 max-laptop:px-40 max-laptop:py-80 max-mobile:h-[334px] max-mobile:gap-[30px] max-mobile:px-6 max-mobile:py-10">
      <div className="flex h-[105px] items-center gap-3.5 max-laptop:h-[84px] max-mobile:h-14 max-mobile:gap-2.5">
        <p className="text-[150px] font-semibold max-laptop:text-[120px] max-mobile:text-[80px]">
          {step}
        </p>
        <div className="flex size-full border-b border-neutral-800 pb-3.5">
          <h1 className="ml-3.5 self-end text-3xl font-medium max-laptop:text-2xl max-mobile:text-xl">
            {title}
          </h1>
        </div>
      </div>
      <p className="h-[135px] text-base max-laptop:h-[120px] max-mobile:h-[168px] max-mobile:text-sm">
        {description}
      </p>
    </div>
  );
}
