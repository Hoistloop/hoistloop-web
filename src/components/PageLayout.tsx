import Navbar from "@components/Navbar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Navbar />
        <section className="m-auto w-9/12">{children}</section>
      </main>
    </>
  );
}
