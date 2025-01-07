import ContactItem, { type ContactItemProps } from "@components/ContactItem";

export interface ContactGroupProps {
  contacts: Array<ContactItemProps>;
}

export default function ContactGroup({ contacts }: ContactGroupProps) {
  return (
    <div className="flex items-center justify-center gap-9 border border-neutral-800  py-12 max-mobile:flex-col">
      {contacts.map((contact, idx) => (
        <ContactItem
          {...contact}
          key={`contact-item-${idx}`}
        />
      ))}
    </div>
  );
}
