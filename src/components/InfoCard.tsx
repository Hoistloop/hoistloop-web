export default function InfoCard({
  description,
  icon,
}: {
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="flex flex-[1_1_0] flex-col items-start gap-5 border-[1px] border-[#262626] p-5 md:gap-6 md:p-10 lg:gap-[30px] lg:p-[50px]">
      <div className="flex flex-col items-start gap-2.5 rounded-xl border-[1px] border-[#262626] p-4 md:p-5 lg:p-6">
        {icon}
      </div>
      <p className="text-xs font-medium leading-[30px] tracking-[-0.12px] md:text-sm lg:text-lg">
        {description}
      </p>
    </article>
  );
}
