export interface SocialIconProps {
  icon: React.ReactNode;
}

export default function SocialIcon({ icon }: SocialIconProps) {
  return (
    <div className="flex size-16 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:size-[52px] [&>svg]:size-6 max-laptop:[&>svg]:h-5">
      {icon}
    </div>
  );
}
