export interface ContactCTAProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl?: string;
  contactHref: string;
}

export default function ContactCTA({
  imageSrc,
  imageUrl,
  title,
  subtitle,
  buttonText,
  contactHref,
}: ContactCTAProps) {
  return (
    <section
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex flex-col  items-center gap-[50px] px-[350px] py-[120px] max-laptop:gap-10 max-laptop:px-[250px] max-laptop:py-[100px] max-mobile:gap-7 max-mobile:px-4 max-mobile:py-[50px]${
        imageUrl && `bg-cover bg-center bg-no-repeat`
      }`}
    >
      <img
        className="size-20 rounded-[12px] object-cover max-laptop:size-[60px] max-laptop:rounded-[10px] max-mobile:size-[50px] max-mobile:rounded-[7px]"
        src={imageSrc}
        alt="image"
      />
      <div className=" max-mobile:h-52max-mobile:h-52 flex h-[141x] flex-col gap-3.5  text-center max-laptop:gap-2.5 max-mobile:gap-1.5">
        <h1 className="text-[38px] font-semibold leading-[45.6px] max-laptop:text-3xl max-laptop:leading-9 max-mobile:text-2xl max-mobile:leading-[28.8px]">
          {title}
        </h1>
        <p className=" text-lg text-desc max-laptop:text-base max-mobile:text-sm max-mobile:leading-6">
          {subtitle}
        </p>
      </div>
      <div className=" laptop:block">
        <a
          href={contactHref}
          className="rounded-lg bg-[#9EFF00] font-medium text-black laptop:px-5 laptop:py-3 laptop:text-sm desktop:px-6 desktop:py-4 desktop:text-lg"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
