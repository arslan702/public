import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Where committed investors invest",
  description: "Built for investors who mean business",
  other: {
    "backlinkexchange-verification": "54b578a2-b7a1-4ac4-a319-d4babd901258"
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
