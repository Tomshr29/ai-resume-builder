import type { ReactNode } from "react";
import Nav from "~/partials/nav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      <main className="p-10">{children}</main>
    </div>
  );
}
