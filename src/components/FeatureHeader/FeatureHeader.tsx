export interface FeatureHeaderProps {
  title: string;
  description: string;
  subtitle: string;
}
export default function FeatureHeader({
  title,
  description,
  subtitle,
}: FeatureHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-[50px] border border-neutral-800 px-[60px] py-[20px] max-laptop:gap-10 max-laptop:px-10 max-mobile:gap-[30px] max-mobile:px-4">
      <div className="flex flex-col gap-3.5 max-laptop:gap-2.5 max-mobile:gap-1.5">
        <p className=" h-[58px] text-5xl font-semibold leading-[57.6px] text-white max-laptop:h-[46px] max-laptop:text-[38px] max-laptop:leading-[45.6px] max-mobile:h-[34px] max-mobile:text-[28px] max-mobile:leading-[36.6px] ">
          {title}
        </p>
        <p className="text-lg text-desc max-laptop:text-base max-mobile:text-sm">
          {description}
        </p>
      </div>
      <p className="mb-2 flex h-[50px] max-w-max content-center items-center rounded-lg bg-neutral-800 px-3.5 py-3 text-[22px] leading-[26.4px] text-white max-laptop:h-[42px] max-laptop:rounded-md max-laptop:p-2.5 max-laptop:text-lg max-laptop:leading-[21.6px] max-mobile:h-[39px] max-mobile:rounded-md max-mobile:p-2.5 max-mobile:text-base max-mobile:leading-[19.2px]">
        {subtitle}
      </p>
    </div>
  );
}
