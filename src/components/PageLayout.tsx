import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="m-auto max-w-screen-2xl">{children}</main>
    </>
  );
}
