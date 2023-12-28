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
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex w-full flex-col items-center gap-1.5 self-stretch px-4 py-[50px] md:gap-2.5 md:px-[250px] md:py-[100px] lg:gap-3.5 lg:px-[300px] lg:py-[120px] ${
        imageUrl && `bg-cover bg-center bg-no-repeat grayscale`
      }`}
    >
      <h2 className="font-semibold md:text-4xl lg:text-5xl ">{title}</h2>
      <h3 className="text-center text-sm font-normal leading-6 md:text-lg lg:text-xl">
        {subtitle}
      </h3>
    </section>
  );
}
