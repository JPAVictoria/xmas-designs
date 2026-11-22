import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: { default: "Christmas, cartooned", template: "%s | Christmas, cartooned" },
  description: "A Christmas gift of cartoon portraits for the family.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1B2140]">
        {children}
      </body>
    </html>
  );
}
