import { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import Header from "@ui/components/Header";
import { Footer, Modal } from "@ui/components/";
import { GlobalScripts } from "../scripts/GlobalScripts";

import { Locale } from "@/i18n.config";
import { ContextProvider } from "@context/Context";

import "@globals/globals.css";
import { GtmBodyScript } from "../scripts/GtmBodyScript";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "G.L.E. Grupo Logístico Especializado",
  description: "Volamos para que llegues más rápido",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.glecolombia.com/",
    siteName: "G.L.E. Grupo Logístico Especializado",
    title: "G.L.E. Grupo Logístico Especializado",
    description: "Volamos para que llegues más rápido",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "G.L.E. Grupo Logístico Especializado",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@glecolombia",
    creator: "@glecolombia",
    title: "G.L.E. Grupo Logístico Especializado",
    description: "Volamos para que llegues más rápido",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <GlobalScripts />
      </head>
      <ContextProvider>
        <body
          className={`${poppins.variable} ${inter.variable}`}
          suppressHydrationWarning
        >
          <GtmBodyScript />
          <Modal lang={params.lang} />
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </body>
      </ContextProvider>
    </html>
  );
}
