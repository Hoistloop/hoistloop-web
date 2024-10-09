export interface PersonCardProps {
  name: string;
  title: string;
  anchorHref: string;
  anchorText: string;
  imageSrc: string;
  imageAltText: string;
}

export default function PersonCard({
  name,
  title,
  anchorHref,
  anchorText,
  imageSrc,
  imageAltText,
}: PersonCardProps) {
  return (
    <figure className="flex w-full items-center rounded-lg border border-neutral-800 bg-fill/20 p-3.5 sm:p-5">
      <img
        className="size-[40px] rounded-lg mobile:size-[40px] laptop:size-[50px] desktop:size-[60px]"
        src={imageSrc}
        alt={imageAltText}
      />
      <figcaption className="flex gap-2.5">
        <div className="ml-[18px] flex flex-col justify-center">
          <p className="text-base font-medium text-white desktop:text-lg">
            {name}
          </p>
          <p className="text-sm text-neutral-400 desktop:text-lg">{title}</p>
        </div>
        <a
          className="hidden items-center rounded-lg bg-neutral-800 px-5 py-[18px] font-medium text-white sm:flex laptop:text-sm desktop:text-lg"
          href={anchorHref}
          rel="noreferrer nofollow"
        >
          {anchorText}
        </a>
      </figcaption>
    </figure>
  );
}
