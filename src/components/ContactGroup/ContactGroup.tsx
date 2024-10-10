import ContactItem, { type ContactItemProps } from "@components/ContactItem";

export default function ContactGroup({
  contacts,
}: {
  contacts: Array<ContactItemProps>;
}) {
  return (
    <div className="flex gap-6 max-mobile:flex-col">
      {contacts.map((contact) => (
        <ContactItem {...contact} />
      ))}
    </div>
  );
}
