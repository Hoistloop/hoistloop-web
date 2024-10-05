export default function InfoCard({
  description,
  icon,
}: {
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="flex flex-[1_1_0] flex-col items-start gap-5 border border-neutral-800 p-5 md:gap-6 md:p-10 lg:gap-[30px] lg:p-[50px]">
      <div className="rounded-xl border border-neutral-800 bg-[linear-gradient(229deg,_rgba(158,_255,_0,0.2)-76%,rgba(158,_255,_0,_0)_31%),linear-gradient(180deg,#242424_0%,rgba(36,_36,_36,_0)_100%)] p-4 max-[1440px]:mb-[30px] max-[1440px]:h-[70px] max-[1440px]:w-[70px] max-[390px]:mb-0 max-[390px]:h-[58px] max-[390px]:w-[58px] md:p-5 lg:p-6 [&>svg]:h-10 max-[1440px]:[&>svg]:h-[30px] max-[390px]:[&>svg]:h-[26px]">
        {icon}
      </div>
      <p className="text-xs font-medium leading-[30px] tracking-[-0.12px] md:text-sm lg:text-lg">
        {description}
      </p>
    </article>
  );
}
