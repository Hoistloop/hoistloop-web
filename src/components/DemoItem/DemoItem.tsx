export interface DemoItemProps {
  header: string;
  imageUrl: string;
  title: string;
  url: string;
  description: string;
}

export default function DemoItem({
  header,
  imageUrl,
  title,
  url,
  description,
}: DemoItemProps) {
  return (
    <div className="flex w-auto flex-col border-b border-r border-neutral-800 pb-24">
      <div className="w-full gap-7 border-b border-neutral-800 px-12 py-8">
        <span className="text-start text-2xl font-medium">{header}</span>
      </div>
      <div className="flex h-auto flex-col gap-7 px-[30px]">
        <img
          className="mt-5 size-auto rounded-xl bg-cover"
          src={imageUrl}
          alt="Demo1"
        />
        <div className="flex h-24 items-center justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[26px] leading-9">{title}</span>
            <span className="btn-primary w-auto rounded-lg px-[10px] py-[14px]">
              {url}
            </span>
          </div>
          <div className="rounded-lg bg-neutral-800 p-[10px]">
            <a
              className="size-14"
              href={url}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="w-auto">{description}</p>
      </div>
    </div>
  );
}
