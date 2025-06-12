import localFont from "next/font/local";
import "./globals.css";
// import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

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
    "backlink-exchange-verification": "8f39f82c-844c-49b5-8c01-68231830e5a6"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
      <meta name="linkweave-verification" content="d5ce81c532a6b3e2956a7362cc078995d8923dd917962eb55ee00a579d4035b5"/>
      </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
