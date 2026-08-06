import { Cabin, Quicksand } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--body-font",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--heading-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webpoka | A Software Development Agency",
  description: "Software development agency",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
