import Navbar from "@components/Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Navbar />
        <section className="m-auto w-full px-4 sm:w-9/12">{children}</section>
        <Footer />
      </main>
    </>
  );
}
