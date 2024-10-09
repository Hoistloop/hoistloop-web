export interface ContactGroupProps {
  children: React.ReactNode;
}

export default function ContactGroup({ children }: ContactGroupProps) {
  return <div className="flex gap-6 max-mobile:flex-col">{children}</div>;
}
