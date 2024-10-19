export interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex w-full flex-col items-center gap-1.5 self-stretch px-4 py-[50px] laptop:gap-2.5 laptop:px-[250px] laptop:py-[100px] desktop:gap-3.5 desktop:px-[300px] desktop:py-[120px] ${
        imageUrl && `bg-cover bg-center bg-no-repeat grayscale`
      }`}
    >
      <h2 className="font-semibold laptop:text-4xl desktop:text-5xl ">
        {title}
      </h2>
      <h3 className="text-center text-sm font-normal leading-6 laptop:text-lg desktop:text-xl">
        {subtitle}
      </h3>
    </section>
  );
}
