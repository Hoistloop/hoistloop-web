import Icon from "@components/Icon";

export default function InfoCard({
  description,
  icon,
}: {
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="flex flex-[1_1_0] flex-col items-start gap-5 border border-neutral-800 p-5 laptop:gap-6 laptop:p-10 desktop:gap-[30px] desktop:p-[50px]">
      <Icon icon={icon} />
      <p className="text-xs font-medium leading-[30px] tracking-[-0.12px] laptop:text-sm desktop:text-lg">
        {description}
      </p>
    </article>
  );
}
