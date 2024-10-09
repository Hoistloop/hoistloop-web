export default function AboutStepGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 divide-x divide-solid divide-neutral-800 max-mobile:grid-cols-1">
      {children}
    </div>
  );
}
