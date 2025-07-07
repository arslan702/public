import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Where committed investors invest",
  description: "Built for investors who mean business",
  other: {
    "backlinkexchange-verification": "6ba0164d-627c-46d8-be3f-5603b44a6c41"
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
