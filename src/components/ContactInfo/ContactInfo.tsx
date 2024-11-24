import SocialIcon, { type SocialIconProps } from "@components/SocialIcon";

export interface ContactInfoProps {
  title: string;
  subtitle: string;
  label: string;
  socialIcons: Array<SocialIconProps>;
}

export default function ContactInfo({
  title,
  subtitle,
  label,
  socialIcons,
}: ContactInfoProps) {
  return (
    <div className="flex border-y border-neutral-800 px-[50px] font-medium max-mobile:block max-mobile:gap-0 max-mobile:p-0">
      <section className="flex items-center gap-3.5 py-[50px] pr-10 text-desc max-mobile:py-5 max-mobile:pr-0">
        <p className="text-[22px] leading-[33px] max-laptop:text-base ">
          {title}
        </p>
        <p className="h-[54px] w-[196px] gap-3.5 rounded-md bg-neutral-800 px-6 py-3 text-center text-xl leading-[30px] max-laptop:h-11 max-laptop:w-[158px] max-laptop:px-5 max-laptop:py-2.5 max-laptop:text-base max-mobile:h-[41px] max-mobile:w-36 max-mobile:rounded max-mobile:text-sm">
          {subtitle}
        </p>
      </section>
      <section className="flex items-center gap-5 border-l border-neutral-800 pl-10 max-mobile:flex-col max-mobile:border-none max-mobile:px-5 max-mobile:pb-10 max-mobile:pt-5">
        <p className="text-lg text-desc max-mobile:text-base">{label}</p>
        <div className="flex gap-3.5 max-mobile:gap-2.5">
          {socialIcons.map((socialIcon) => (
            <SocialIcon {...socialIcon} />
          ))}
        </div>
      </section>
    </div>
  );
}
