import Icon from "@components/Icon";
import { useRouter } from "@tanstack/react-router";

export interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  button?: { text: string; link: string };
}

export default function Card({ icon, title, description, button }: CardProps) {
  const router = useRouter();

  const navigate =
    router?.navigate ||
    (() => {
      console.warn("Router context is missing. Navigation will not work.");
    });
  return (
    <div
      className={`flex flex-col justify-between border-solid border-neutral-800 p-[50px] max-laptop:w-[426.67px] max-laptop:p-10 max-mobile:w-[358px] max-mobile:border-y max-mobile:p-[30px] sm:border-b sm:border-r ${
        button
          ? "h-[577px] max-laptop:h-[510px] max-mobile:h-[344px]"
          : "h-auto"
      }`}
    >
      <div className="h-max w-[432px] max-laptop:w-[346.68px] max-mobile:w-[298px]">
        <div className="max-mobile:mb-6 max-mobile:flex max-mobile:items-center max-mobile:gap-3.5 ">
          {icon && <Icon icon={icon} />}

          <div className="mb-5 mt-[30px] text-3xl font-semibold leading-[45px] max-laptop:mb-3.5 max-laptop:text-2xl max-laptop:leading-9 max-mobile:mb-0 max-mobile:text-xl">
            {title}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="h-[96px] overflow-hidden text-ellipsis whitespace-normal break-words text-lg leading-[24px] max-laptop:text-base max-laptop:font-normal max-mobile:text-sm">
        {description}
      </div>

      {/* Botón */}
      {button && (
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => navigate({ to: button.link })}
            className="h-[60px] w-[432px] cursor-pointer rounded-lg bg-neutral-800 text-lg leading-[24px] max-laptop:h-[52px] max-laptop:w-[346.68px] max-laptop:rounded-md max-laptop:text-sm max-laptop:font-medium max-laptop:leading-6 max-mobile:h-[52px] max-mobile:w-[298px]"
          >
            {button.text}
          </button>
        </div>
      )}
    </div>
  );
}
