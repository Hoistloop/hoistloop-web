export default function CardGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-x border-solid border-neutral-800 sm:block md:flex">
      {children}
    </div>
  );
}
