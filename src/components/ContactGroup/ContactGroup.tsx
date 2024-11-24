import ContactItem, { type ContactItemProps } from "@components/ContactItem";

export interface ContactGroupProps {
  contacts: Array<ContactItemProps>;
}

export default function ContactGroup({ contacts }: ContactGroupProps) {
  return (
    <div className="flex gap-6 max-mobile:flex-col">
      {contacts.map((contact, idx) => (
        <ContactItem
          {...contact}
          key={`contact-item-${idx}`}
        />
      ))}
    </div>
  );
}
