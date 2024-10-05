export default function Icon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:h-[70px] max-laptop:w-[70px] max-mobile:h-[58px] max-mobile:w-[58px] [&>svg]:h-10 max-laptop:[&>svg]:h-[30px] max-mobile:[&>svg]:h-[26px] ">
      {icon}
    </div>
  );
}
