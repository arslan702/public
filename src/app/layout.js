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
  // "linkweave-verification": "d5ce81c532a6b3e2956a7362cc078995d8923dd917962eb55ee00a579d4035b5"
  other: {
    "backlinkexchange-verification": "73daabf5-9c35-40d7-8067-a8d68e519956"
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
