export interface FeatureItemProps {
  title: string;
}

export default function FeatureTitle({ title }: FeatureItemProps) {
  return (
    <div className="flex flex-1 flex-col gap-[30px] border border-neutral-800 p-[50px] max-laptop:gap-6 max-laptop:p-10 max-mobile:gap-5 max-mobile:p-5 ">
      <p className=" text-xl font-light  	 leading-8 text-desc max-laptop:text-base max-mobile:text-base">
        {title}
      </p>
    </div>
  );
}
