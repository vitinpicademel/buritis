import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Parque dos Buritis 2 - Casas à Venda em Uberaba",
  description: "Casas à venda no residencial Parque dos Buritis 2 em Uberaba. Financiamento MCMV. Fale conosco e agende uma visita!",
  openGraph: {
    title: "Parque dos Buritis 2 - Casas à Venda",
    description: "Casas à venda no residencial Parque dos Buritis 2 em Uberaba. Projeto moderno, 3 quartos sendo 1 suíte.",
    images: [
      {
        url: "/images/carrossel/foto1.jpeg",
        width: 1200,
        height: 630,
        alt: "Parque dos Buritis 2",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${manrope.className} ${sora.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
