
import { Inter } from "next/font/google";
import { Header } from "../components/shared/Header/index"
import { Footer } from "../components/shared/Footer/index"

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
