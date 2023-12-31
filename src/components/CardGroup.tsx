export default function CardGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-x border-solid border-[#262626]">
      {children}
    </div>
  );
}
