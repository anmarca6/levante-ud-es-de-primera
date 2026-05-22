import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Granotas en Sevilla · Real Betis vs Levante UD · Jornada 38",
  description:
    "Guía del desplazamiento granota a Sevilla. Todo lo que necesitas para el viaje: horarios, mapas, transporte, checklist y más.",
  openGraph: {
    title: "Granotas en Sevilla 🔵🟡",
    description: "Real Betis vs Levante UD · 25 mayo · Estadio La Cartuja · Jornada 38",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
