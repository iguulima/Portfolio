import type { Metadata } from "next";
import DynamicScrollbar from "@/components/DynamicScrollbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igor Lima",
  description: "Portfólio de Igor Lima, Product Designer especializado em UX/UI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <DynamicScrollbar />
      </body>
    </html>
  );
}
