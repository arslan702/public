import localFont from "next/font/local";
import "./globals.css";

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
    "backlinkexchange-verification": "d2076d63-4dd8-493a-a398-c985ba964399"
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
        {children}
      </body>
    </html>
  );
}
