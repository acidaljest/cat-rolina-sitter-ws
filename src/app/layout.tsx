import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./config/fonts";
import { Navbar } from "../components/ui/Navbar";

export const metadata: Metadata = {
  title: "Cat.rolina Sitter | Cuidado Profesional para Gatos",
  description: "Servicio profesional de cuidado de gatos a domicilio en Santiago",
  keywords: "cuidado de gatos, cat sitter, gatos, cuidado a domicilio, Santiago, mascotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
