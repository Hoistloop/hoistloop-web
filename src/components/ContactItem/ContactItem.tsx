export interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3.5 rounded-md bg-neutral-800 px-5 py-3.5">
      <div className="flex size-[30px] items-center justify-center rounded-xl text-accent [&>svg]:h-[30px] max-laptop:[&>svg]:size-6">
        {icon}
      </div>
      <p className="text-xl text-desc max-laptop:text-base">{text}</p>
    </div>
  );
}
