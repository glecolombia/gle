import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Mensajería Expresa",
  description:
    "Servicio de mensajería expresa para documentos y paquetes, con cobertura nacional e internacional.",
  keywords:
    "transporte, carga, logística, mensajería expresa, paquetería, envíos",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
