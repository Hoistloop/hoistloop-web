import Icon from "@components/Icon";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

export default function Card({
  icon,
  title,
  description,
  buttonText,
}: CardProps) {
  return (
    <div className=" flex h-[577px] flex-col justify-between border-r border-solid border-neutral-800 p-[50px] last:border-none max-laptop:h-[510px] max-laptop:w-[426.67px] max-laptop:p-10 max-mobile:h-[344px] max-mobile:w-[358px] max-mobile:border-y max-mobile:p-[30px]">
      <div className="h-max w-[432px] max-laptop:w-[346.68px] max-mobile:w-[298px]">
        <div className="max-mobile:mb-6 max-mobile:flex max-mobile:items-center max-mobile:gap-3.5 ">
          <Icon icon={icon} />

          <div className="mb-5 mt-[30px] text-3xl font-semibold leading-[45px] max-laptop:mb-3.5 max-laptop:text-2xl max-laptop:leading-9 max-mobile:mb-0 max-mobile:text-xl">
            {title}
          </div>
        </div>
        <div className="text-lg leading-[24px] max-laptop:text-base max-laptop:font-normal max-mobile:h-[126px] max-mobile:text-sm">
          {description}
        </div>
      </div>
      <button className="h-[60px] w-[432px] cursor-pointer rounded-lg bg-neutral-800 text-lg leading-[24px] max-laptop:h-[52px] max-laptop:w-[346.68px] max-laptop:rounded-md max-laptop:text-sm max-laptop:font-medium max-laptop:leading-6 max-mobile:h-[52px] max-mobile:w-[298px]">
        {buttonText}
      </button>
    </div>
  );
}
