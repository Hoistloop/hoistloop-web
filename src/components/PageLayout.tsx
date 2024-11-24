export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="m-auto max-w-screen-2xl">{children}</main>
    </>
  );
}
