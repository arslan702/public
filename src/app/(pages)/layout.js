import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Where committed investors invest",
  description: "Built for investors who mean business",
  other: {
    "backlinkexchange-verification": "a5547170-2cfd-48d4-8c5f-522d68c97110"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
