import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Where committed investors invest",
  description: "Built for investors who mean business",
  other: {
    "backlinkexchange-verification": "cd2a3af3-d55a-443b-b5d6-d3953aab5fbd"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Publictrade.net - Where committed investors invest</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
