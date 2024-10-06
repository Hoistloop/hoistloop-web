export default function Icon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex size-20 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:size-[70px] max-mobile:size-[58px] [&>svg]:h-10 max-laptop:[&>svg]:h-[30px] max-mobile:[&>svg]:h-[26px] ">
      {icon}
    </div>
  );
}
