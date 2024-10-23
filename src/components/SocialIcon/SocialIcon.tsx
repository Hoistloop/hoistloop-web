export interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export default function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-16 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:size-[52px] [&>svg]:size-6 max-laptop:[&>svg]:h-5"
    >
      {icon}
    </a>
  );
}
