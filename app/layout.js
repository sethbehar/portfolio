import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seth Behar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Grotesk:regular,500" media="all"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
