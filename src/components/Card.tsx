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
    <div className="flex h-[577px] w-full flex-col justify-between border-r border-solid border-[#262626] p-[50px] last:border-none">
      <div className="flex w-5/6  flex-col gap-10">
        <div className="bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat flex h-[88px] w-[88px] flex-row items-center justify-center rounded-lg border border-solid border-[#2e2e2e] bg-[linear-gradient(229deg,_rgba(158,_255,_0,0.2)-76%,rgba(158,_255,_0,_0)_31%),linear-gradient(180deg,#242424_0%,rgba(36,_36,_36,_0)_100%)] [&>svg]:h-10">
          {iconCard}
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="w-full text-3xl font-semibold leading-[45px] tracking-[-0.18] text-white">
            {title}
          </div>
          <div className="w-full text-lg leading-[24px] text-[#e6e6e6]">
            {subtitle}
          </div>
        </div>
      </div>
      <button className="flex h-16 w-5/6 cursor-pointer items-center justify-center self-center rounded-lg bg-[#262626] text-lg font-medium leading-[24px] text-white">
        {buttonCard}
      </button>
    </div>
  );
}
