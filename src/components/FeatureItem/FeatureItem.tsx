import Icon from "@components/Icon";

export interface FeatureItemProps {
  icon: React.ReactNode;
  subtitle: string;
}

export default function FeatureItem({ icon, subtitle }: FeatureItemProps) {
  return (
    <div className="flex flex-1 flex-col gap-[30px] border-b border-r border-neutral-800 p-[50px] max-laptop:gap-6 max-laptop:p-10 max-mobile:gap-5 max-mobile:p-5 ">
      <Icon icon={icon} />
      <p className=" h-[60px] text-xl leading-[30px] text-desc max-laptop:text-base max-mobile:text-base">
        {subtitle}
      </p>
    </div>
  );
}
