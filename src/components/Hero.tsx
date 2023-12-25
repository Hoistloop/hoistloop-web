export default function Hero({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl?: string;
}) {
  return (
    <section
      className={`flex flex-col items-center gap-[6px] self-stretch px-[16px] py-[50px] md:gap-[10px] md:px-[250px] md:py-[100px] lg:gap-[14px] lg:px-[300px] lg:py-[120px]  ${
        imageUrl &&
        `bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat grayscale`
      }`}
    >
      <h2 className="font-semibold md:text-4xl lg:text-5xl ">{title}</h2>
      <h3 className="text-center text-sm font-normal leading-6 md:text-lg lg:text-xl">
        {subtitle}
      </h3>
    </section>
  );
}
