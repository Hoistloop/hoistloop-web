interface CardProps {
  iconCard: React.ReactNode;
  title: string;
  subtitle: string;
  buttonCard: string;
}

export default function Card({
  iconCard,
  title,
  subtitle,
  buttonCard,
}: CardProps) {
  return (
    <div className=" flex h-[577px] flex-col justify-between border-r border-solid border-[#262626] p-[50px] last:border-none max-[1440px]:h-[510px] max-[1440px]:w-[426.67px] max-[1440px]:p-10 max-[390px]:h-[344px] max-[390px]:w-[358px] max-[390px]:border-y max-[390px]:p-[30px]">
      <div className="h-max w-[432px]  max-[1440px]:w-[346.68px] max-[390px]:w-[298px]">
        <div className="max-[390px]:mb-6 max-[390px]:flex max-[390px]:items-center max-[390px]:gap-3.5 ">
          <div className="bg-cover, mb-10 flex h-[88px] w-[88px] items-center justify-center rounded-lg border border-solid border-[#2e2e2e] bg-[linear-gradient(229deg,_rgba(158,_255,_0,0.2)-76%,rgba(158,_255,_0,_0)_31%),linear-gradient(180deg,#242424_0%,rgba(36,_36,_36,_0)_100%)] max-[1440px]:mb-[30px] max-[1440px]:h-[70px] max-[1440px]:w-[70px] max-[390px]:mb-0 max-[390px]:h-[58px] max-[390px]:w-[58px] [&>svg]:h-10 max-[1440px]:[&>svg]:h-[30px] max-[390px]:[&>svg]:h-[26px]">
            {iconCard}
          </div>
          <div className="mb-5 text-3xl font-semibold leading-[45px] max-[1440px]:mb-3.5 max-[1440px]:text-2xl max-[1440px]:leading-9 max-[390px]:mb-0 max-[390px]:text-xl">
            {title}
          </div>
        </div>
        <div className="text-lg leading-[24px] max-[1440px]:text-base max-[1440px]:font-normal max-[390px]:h-[126px] max-[390px]:text-sm">
          {subtitle}
        </div>
      </div>
      <button className="h-[60px] w-[432px] cursor-pointer rounded-lg bg-[#262626] text-lg leading-[24px] max-[1440px]:h-[52px] max-[1440px]:w-[346.68px] max-[1440px]:rounded-md max-[1440px]:text-sm max-[1440px]:font-medium max-[1440px]:leading-6 max-[390px]:h-[52px] max-[390px]:w-[298px]">
        {buttonCard}
      </button>
    </div>
  );
}
