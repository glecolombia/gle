import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Express Messaging",
  description:
    "Express messaging service for documents and packages, with domestic and international coverage.",
  keywords:
    "transport, cargo, logistics, express messaging, courier, shipments",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
