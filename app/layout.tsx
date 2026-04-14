import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Variable.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Albin Johansson — Product Designer",
  description:
    "Product Designer based in Karlstad, Sweden. Crafting digital experiences with purpose and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${switzer.variable}`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-white">
        {children}
      </body>
    </html>
  );
}
