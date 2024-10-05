export default function CardGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-x border-solid border-neutral-800 mobile:block laptop:flex">
      {children}
    </div>
  );
}
