import { ReactNode } from "react";
import Navbar from "@components/Navbar";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="m-auto max-w-screen-2xl">{children}</main>
    </>
  );
}
