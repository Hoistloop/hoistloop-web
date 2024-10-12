export default function Icon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex size-16 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:size-[52px] [&>svg]:size-6 max-laptop:[&>svg]:h-5">
      {icon}
    </div>
  );
}
